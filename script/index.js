const openFormButton = document.querySelector(".profile__edit-button");
const closeFormButton = document.querySelector(".popup__close-button_type_profile");
const profilePopup = document.querySelector(".popup_type_edit-profile");
const popForm = document.querySelector(".form_type_profile");
const nameInput = document.querySelector(".form__input");
const occupationInput = document.querySelector(".form__input:last-of-type");
const textName = document.querySelector(".profile__info-title");
const occupation = document.querySelector(".profile__info-class");

function openForm () {
    nameInput.value = textName.textContent;
    occupationInput.value = occupation.textContent;
    profilePopup.classList.add("popup_open");
  };

  function submitForm (e) {
    e.preventDefault();
    textName.textContent = nameInput.value;
    occupation.textContent = occupationInput.value;
    closeForm ()
  };

  function closeForm () {
    profilePopup.classList.remove("popup_open");
  };
  
openFormButton.addEventListener("click", openForm);
closeFormButton.addEventListener("click", closeForm);
popForm.addEventListener("submit", submitForm);


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


function toggleClass(component, cl) {
  component.classList.toggle(cl);
}
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
}

function renderElement(element, list) {
  list.prepend(createElement(element));
}

function openPrev () {
  imgPreviewPopup.classList.add("popup_open");
};

function closePrev () {
  imgPreviewPopup.classList.remove("popup_open");
};

initialElements.forEach((element) => renderElement(element, elementList));

function previewImage(card) {
  const popupImage = imgPreviewPopup.querySelector(".popup__image");
  const popupCaption = imgPreviewPopup.querySelector(".popup__caption");
  popupImage.src = card.link;
  popupImage.alt = `A picture of ${card.name}`;
  popupCaption.textContent = card.name;
  openPrev();
}

imgPreviewCloseButton.addEventListener("click", () => closePrev ());


const addPlaceButton = document.querySelector(".profile__add-button");
const addPlacePopup = document.querySelector(".popup_type_add-place");
const placeForm = document.querySelector(".popup__form_type_add-place");
const placeName = placeForm.querySelector(".form__input_type_place-name");
const placeURL = placeForm.querySelector(".form__input_type_place-url");
const placeCloseButton = addPlacePopup.querySelector(".popup__close-button_type_place");


function openPlace (popup) {
  popup.classList.add("popup_open");
};

function closePlace (popup) {
  popup.classList.remove("popup_open");
};

function addCard(event) {
    event.preventDefault();
    renderElement({ name: placeName.value, link: placeURL.value }, elementList);
    closePlace (addPlacePopup);
    placeForm.reset();
  };

  function renderElement(card, list) {
    list.prepend(createElement(card));
  };
  placeForm.addEventListener("submit", addCard);  
addPlaceButton.addEventListener("click", () => openPlace(addPlacePopup));
placeCloseButton.addEventListener("click", () => closePlace(addPlacePopup));