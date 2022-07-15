import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import {
  clickOutsideToClose,
  closeWithEscape,
  previewImage,
  handleProfileFormSubmit,
  closePopup,
  fillProfileFormFields,
  openPopup,
  profileForm,
} from "./utils.js";
const profileCloseButton = document.querySelector(
  ".popup__close-button_type_profile"
);

const placeSubmitButton = document.querySelector(
  ".popup__submit-button_type_place"
);
const profileSubmitButton = document.querySelector(
  ".popup__submit-button_type_profile"
);
const elements = document.querySelector(".elements");
const elementList = elements.querySelector(".elements__list");
const imgPreviewPopup = document.querySelector(".popup_type_image-preview");

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

const popupImage = imgPreviewPopup.querySelector(".popup__image");
const popupCaption = imgPreviewPopup.querySelector(".popup__caption");

const addPlaceButton = document.querySelector(".profile__add-button");
const addPlacePopup = document.querySelector(".popup_type_add-place");
const placeForm = document.querySelector(".form_type_add-place");
const placeName = placeForm.querySelector(".form__input_type_place-name");
const placeURL = placeForm.querySelector(".form__input_type_place-url");
const placeCloseButton = addPlacePopup.querySelector(
  ".popup__close-button_type_place"
);
const settings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

const editFormValidator = new FormValidator(settings, profileForm);
const addCardFormValidator = new FormValidator(settings, placeForm);
const addDelete = new FormValidator(settings, placeForm);
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
addDelete.disableButton(placeSubmitButton);
addDelete.disableButton(profileSubmitButton);

profileForm.addEventListener("submit", handleProfileFormSubmit);

const cardTemplateSelector = "#element-template";

function renderElement(element, list) {
  const card = new Card(element, cardTemplateSelector, previewImage);
  const cardElement = card.createElement();
  list.prepend(cardElement);
}

initialElements.forEach((element) => renderElement(element, elementList));

function addCard(event) {
  event.preventDefault();
  renderElement({ name: placeName.value, link: placeURL.value }, elementList);
  placeForm.reset();
  closePopup(addPlacePopup);
  addDelete.disableButton(placeSubmitButton);
}

placeForm.addEventListener("submit", addCard);
addPlaceButton.addEventListener("click", () => openPopup(addPlacePopup));
