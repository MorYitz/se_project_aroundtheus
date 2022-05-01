const profileOpenButton = document.querySelector(".profile__edit-button");
const profileCloseButton = document.querySelector(".popup__close-button_type_profile");
const profilePopup = document.querySelector(".popup_type_edit-profile");
const profileForm = document.querySelector(".form_type_profile");
const nameInput = document.querySelector(".form__input");
const occupationInput = document.querySelector(".form__input:last-of-type");
const textName = document.querySelector(".profile__info-title");
const occupation = document.querySelector(".profile__info-class");

const elements = document.querySelector(".elements");
const elementList = elements.querySelector(".elements__list");
const imgPreviewPopup = document.querySelector(".popup_type_image-preview");
const imgPreviewCloseButton = imgPreviewPopup.querySelector(
  ".popup__close-button_type_image-preview"
);

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
const placeForm = document.querySelector(".popup__form_type_add-place");
const placeName = placeForm.querySelector(".form__input_type_place-name");
const placeURL = placeForm.querySelector(".form__input_type_place-url");
const placeCloseButton = addPlacePopup.querySelector(".popup__close-button_type_place");

function openForm (popup) {
    popup.classList.add("popup_open");
  };

  function fillProfileFormFields() {
    nameInput.value = textName.textContent;
    occupationInput.value = occupation.textContent;
  };

  function closeForm (popup) {
    popup.classList.remove("popup_open");
  };
  
  function handleProfileFormSubmit (e) {
    e.preventDefault();
    textName.textContent = nameInput.value;
    occupation.textContent = occupationInput.value;
    
  };

  
profileOpenButton.addEventListener("click", () => {
  fillProfileFormFields();
  openForm(profilePopup);
});



profileForm.addEventListener("submit", handleProfileFormSubmit);

const closeButtons = document.querySelectorAll('.popup__close-button');

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closeForm(popup));
});

function toggleClass(component, cl) {
  component.classList.toggle(cl);
};

function createElement(data) {
  const elementTemplate = document.querySelector("#element-template").content;
  const elementContent = elementTemplate.querySelector(".element").cloneNode(true);
  const elementName = elementContent.querySelector(".element__name");
  elementName.textContent = data.name;
  const likeButton = elementContent.querySelector(".element__like-button");
  const elementImage = elementContent.querySelector(".element__image");
  const deleteButton = elementContent.querySelector(".element__delete-button");
  elementImage.src = data.link;
  elementImage.alt = `Picture of ${data.name}`;
   elementImage.addEventListener("click", () => previewImage(data));
   deleteButton.addEventListener("click", () => elementContent.remove());
   likeButton.addEventListener("click", () =>
   toggleClass(likeButton, "element__button_liked")
 );
  return elementContent;
};

function renderElement(element, list) {
  list.prepend(createElement(element));
};

initialElements.forEach((element) => renderElement(element, elementList));

function previewImage(card) {
  popupImage.src = card.link;
  popupImage.alt = `A picture of ${card.name}`;
  popupCaption.textContent = card.name;
  openForm(imgPreviewPopup);
}



function addCard(event) {
    event.preventDefault();
    renderElement({ name: placeName.value, link: placeURL.value }, elementList);
    
    placeForm.reset();
  };

  function renderElement(card, list) {
    list.prepend(createElement(card));
  };
  placeForm.addEventListener("submit", addCard);  
addPlaceButton.addEventListener("click", () => openForm(addPlacePopup));
