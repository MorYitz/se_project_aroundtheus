import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import {
  clickOutsideToClose,
  closeWithEscape,
  closePopup,
  openPopup,
} from "./utils.js";
const profileCloseButton = document.querySelector(
  ".popup__close-button_type_profile"
);
const closeButtons = document.querySelectorAll(".popup__close-button");
const profileOpenButton = document.querySelector(".profile__edit-button");
const nameInput = document.querySelector(".form__input");
const occupationInput = document.querySelector(".form__input:last-of-type");
const textName = document.querySelector(".profile__info-title");
const occupation = document.querySelector(".profile__info-class");
const profilePopup = document.querySelector(".popup_type_edit-profile");
const profileForm = document.querySelector(".form_type_profile");
const imgPreviewPopup = document.querySelector(".popup_type_image-preview");
const popupCaption = imgPreviewPopup.querySelector(".popup__caption");

const popupImage = imgPreviewPopup.querySelector(".popup__image");

const placeSubmitButton = document.querySelector(
  ".popup__submit-button_type_place"
);
const profileSubmitButton = document.querySelector(
  ".popup__submit-button_type_profile"
);
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

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});
function handleProfileFormSubmit(e) {
  e.preventDefault();
  textName.textContent = nameInput.value;
  occupation.textContent = occupationInput.value;
  closePopup(profilePopup);
}

function fillProfileFormFields() {
  nameInput.value = textName.textContent;
  occupationInput.value = occupation.textContent;
}
profileOpenButton.addEventListener("click", () => {
  fillProfileFormFields();
  openPopup(profilePopup);
});
function previewImage(card) {
  popupImage.src = card.link;
  popupImage.alt = `A picture of ${card.name}`;
  popupCaption.textContent = card.name;
  openPopup(imgPreviewPopup);
}

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
addCardFormValidator.disableButton(placeSubmitButton);

profileForm.addEventListener("submit", handleProfileFormSubmit);

const cardTemplateSelector = "#element-template";

const createCard = (element) => {
  const card = new Card(element, cardTemplateSelector, previewImage);
  const cardElement = card.createElement();

  return cardElement;
};
const renderElement = (element, list) => {
  const card = createCard(element);
  list.prepend(card);
};

initialElements.forEach((element) => renderElement(element, elementList));

function addCard(event) {
  event.preventDefault();
  renderElement({ name: placeName.value, link: placeURL.value }, elementList);
  placeForm.reset();
  closePopup(addPlacePopup);
  addCardFormValidator.disableButton();
}

placeForm.addEventListener("submit", addCard);
addPlaceButton.addEventListener("click", () => {
  openPopup(addPlacePopup);
  placeForm.reset();
  addCardFormValidator.resetForm();
});
