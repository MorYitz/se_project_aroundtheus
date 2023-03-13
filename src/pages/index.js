import { PopupWithForm } from '../components/PopupWithForm.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { api } from '../components/Api.js';
import { PopupWithSubmit } from '../components/PopupWithSubmit.js';
const avatar = document.querySelector('.profile__image');
const avatarChange = document.querySelector('.profile__image-change');
const confirmPopup = new PopupWithSubmit('.popup_type_delete');
const profileOpenButton = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.form__input');
const occupationInput = document.querySelector('.form__input:last-of-type');
const profileForm = document.querySelector('.form_type_profile');
const elements = document.querySelector('.elements');
const elementList = elements.querySelector('.elements__list');
const avatarPopup = document.querySelector('.popup_type_change-avatar');
const addPlaceButton = document.querySelector('.profile__add-button');
const placeForm = document.querySelector('.form_type_add-place');
const settings = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible',
};
const cardTemplateSelector = '#element-template';

confirmPopup.setEventListeners();
avatarChange.addEventListener('click', () => {
  avatarFormValidator.resetValidation();
  popupChangeAvatrImage.open();
});

let userId;

Promise.all([api.getCards(), api.getUserInfo()])
  .then(([cardData, userData]) => {
    userId = userData._id;
    section.renderItems(cardData);
    userInfo.setUserInfo(userData.name, userData.about);
    userInfo.setAvatarInfo(userData.avatar);
  })
  .catch(console.log);

const renderCard = (data) => {
  const card = new Card(
    data,
    userId,
    cardTemplateSelector,
    () => {
      addPopupImage.open(data.name, data.link);
    },

    () => {
      confirmPopup.open();
      confirmPopup.setAction(() => {
        api
          .deleteCard(card.getId())
          .then((res) => {
            card.removeCard();
            confirmPopup.close();
          })
          .catch(console.log);
      });
    },
    () => {
      if (card.isLiked()) {
        api
          .disLikeCard(card.getId())
          .then((res) => {
            card.setLikes(res.likes);
            console.log('res', res);
          })
          .catch(console.log);
      } else {
        api
          .likeCard(card.getId())
          .then((res) => {
            card.setLikes(res.likes);
            console.log('res', res);
          })
          .catch(console.log);
      }
    }
  );
  section.addItem(card.createElement());
};

const handleAddCardSubmit = (data) => {
  addCardPopup.loadingRender('saving');
  api
    .addCard(data['card-title'], data.link)
    .then((res) => {
      renderCard(res, elementList);
      addCardPopup.close();
    })
    .catch(console.log)
    .finally(() => addCardPopup.loadingRender());
};
const userInfo = new UserInfo({
  nameSelector: '.profile__info-title',
  jobSelector: '.profile__info-class',
  avatarSelector: '.profile__image',
});

const handleProfileFormSubmit = (data) => {
  editProfilePopup.loadingRender('saving');
  api
    .editProfile(data.fullName, data.className)
    .then((res) => {
      userInfo.setUserInfo(data.fullName, data.className);
      editProfilePopup.close();
      console.log('res editProfile =>', res);
    })
    .catch(console.log)
    .finally(() => {
      editProfilePopup.loadingRender();
    });
};

const handleAvatarFormSubmit = (data) => {
  popupChangeAvatrImage.loadingRender('saving');

  api
    .editAvatar(data.avatar)
    .then((res) => {
      userInfo.setAvatarInfo(res.avatar);
      popupChangeAvatrImage.close();
    })
    .catch(console.log)
    .finally(() => {
      popupChangeAvatrImage.loadingRender();
    });
};
const popupChangeAvatrImage = new PopupWithForm(
  '.popup_type_change-avatar',
  handleAvatarFormSubmit
);
popupChangeAvatrImage.setEventListeners();
const addCardPopup = new PopupWithForm(
  '.popup_type_add-place',
  handleAddCardSubmit
);
const editProfilePopup = new PopupWithForm(
  '.popup_type_edit-profile',
  handleProfileFormSubmit
);
editProfilePopup.setEventListeners();

addCardPopup.setEventListeners();
const editFormValidator = new FormValidator(settings, profileForm);
const addCardFormValidator = new FormValidator(settings, placeForm);
const avatarFormValidator = new FormValidator(settings, avatarPopup);
avatarFormValidator.enableValidation();
const addPopupImage = new PopupWithImage('.popup_type_image-preview');
addPopupImage.setEventListeners();

const section = new Section({ renderer: renderCard }, '.elements__list');

const fillProfileForm = () => {
  const profileData = userInfo.getUserInfo();
  nameInput.value = profileData.name;
  occupationInput.value = profileData.job;
};
profileOpenButton.addEventListener('click', () => {
  fillProfileForm();
  editProfilePopup.open();
  editFormValidator.resetValidation();
});

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

addPlaceButton.addEventListener('click', () => {
  addCardPopup.open();
  addCardFormValidator.resetValidation();
});
