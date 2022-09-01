import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js"
import { UserInfo } from "../components/UserInfo.js"
import { popupWithImage} from "../components/PopupWithImage.js"
import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
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
  const card = new Card(data, cardTemplateSelector, ()=>{addPopupImage.open(data.name, data.link)});
  section.addItem(card.createElement());

};

const handleAddCardSubmit = (data) =>{
  createCard({ name: data["card-title"], link: data["card-link"] }, elementList);
 addCardPopup.close()
}
const userInfo = new UserInfo({
  nameSelector: ".profile__info-title",
  jobSelector: ".profile__info-class",
});

const handleProfileFormSubmit = (data) =>{
  userInfo.setUserInfo(data)
  editProfilePopup.close()
}

const addCardPopup = new PopupWithForm(".popup_type_add-place", handleAddCardSubmit);
const editProfilePopup = new PopupWithForm(".popup_type_edit-profile", handleProfileFormSubmit);
editProfilePopup.setEventListeners()

addCardPopup.setEventListeners()
const editFormValidator = new FormValidator(settings, profileForm);
const addCardFormValidator = new FormValidator(settings, placeForm);

const addPopupImage = new popupWithImage(".popup_type_image-preview");
addPopupImage.setEventListeners();

 const section = new Section({items:initialElements, renderer: createCard}, ".elements__list" )
  section.renderItems()

 profileOpenButton.addEventListener("click", () => {
 const profileData = userInfo.getUserInfo();
   nameInput.value = profileData.name;
   occupationInput.value = profileData.job;
  editProfilePopup.open();
//  editFormValidator.resetValidation();
});

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

addPlaceButton.addEventListener("click", () => {
  addCardPopup.open();
  placeForm.reset();
  addCardFormValidator.resetValidation();
});
