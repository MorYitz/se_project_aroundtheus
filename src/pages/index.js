import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { api } from "../components/Api.js";
import { PopupWithSubmit } from "../components/PopupWithSubmit.js";
const confirmPopup = new PopupWithSubmit("popup_type_delete")
 confirmPopup.setEventListeners()
api
  .getUserInfo()
  .then((res) => {
    userInfo.setUserInfo(res.name, res.about);
    console.log("res getUserInfo =>", res);
  })
  .catch(console.log);

api
  .getCards()
  .then((res) => {
    console.log("res getCards =>", res);
    section.renderItems(res);
  })
  .catch(console.log);

const profileOpenButton = document.querySelector(".profile__edit-button");
const nameInput = document.querySelector(".form__input");
const occupationInput = document.querySelector(".form__input:last-of-type");
const profileForm = document.querySelector(".form_type_profile");
const elements = document.querySelector(".elements");
const elementList = elements.querySelector(".elements__list");

const initialElements = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const addPlaceButton = document.querySelector(".profile__add-button");
const placeForm = document.querySelector(".form_type_add-place");
const settings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};
const cardTemplateSelector = "#element-template";



const createCard = (data) => {
  const card = new Card(data, cardTemplateSelector, () => {
    addPopupImage.open(data.name, data.link);
  }, ()=> {
     confirmPopup.open()
  });
  section.addItem(card.createElement());
};

const renderCard = (cardData) => {
  const cardElement = createCard(cardData);
  section.addItem(cardElement);
};

const handleAddCardSubmit = (data) => {
  api
    .addCard(data["card-title"], data["card-link"])
    .then((res) => {
      renderCard({ name: res.name, link: res.link }, elementList);
    })
    .catch(console.log);

  addCardPopup.close();
};
const userInfo = new UserInfo({
  nameSelector: ".profile__info-title",
  jobSelector: ".profile__info-class",
});

const handleProfileFormSubmit = (data) => {
  api
    .editProfile(data.fullName, data.className)
    .then((res) => {
      userInfo.setUserInfo(data.fullName, data.className);
      console.log("res editProfile =>", res);
    })
    .catch(console.log)
    .finally(() => {
      editProfilePopup.close();
    });
};

const addCardPopup = new PopupWithForm(
  ".popup_type_add-place",
  handleAddCardSubmit
);
const editProfilePopup = new PopupWithForm(
  ".popup_type_edit-profile",
  handleProfileFormSubmit
);
editProfilePopup.setEventListeners();

addCardPopup.setEventListeners();
const editFormValidator = new FormValidator(settings, profileForm);
const addCardFormValidator = new FormValidator(settings, placeForm);

const addPopupImage = new PopupWithImage(".popup_type_image-preview");
addPopupImage.setEventListeners();

const section = new Section({ renderer: renderCard }, ".elements__list");

const fillProfileForm = () => {
  const profileData = userInfo.getUserInfo();
  nameInput.value = profileData.name;
  occupationInput.value = profileData.job;
};
profileOpenButton.addEventListener("click", () => {
  fillProfileForm();
  editProfilePopup.open();
});

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

addPlaceButton.addEventListener("click", () => {
  addCardPopup.open();
  addCardFormValidator.resetValidation();
});
