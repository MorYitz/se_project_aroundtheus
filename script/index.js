const openFormButton = document.querySelector(".profile__edit-button");
const closeFormButton = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup");
const popForm = document.querySelector(".form");

const nameInput = document.querySelector(".form__input");
const occupationInput = document.querySelector(".form__input:last-of-type");
const textName = document.querySelector(".profile__info-title");
const occupation = document.querySelector(".profile__info-class");

function openForm () {
    nameInput.value = textName.textContent;
    occupationInput.value = occupation.textContent;
    popup.classList.add("popup_open");
  };

  
  function submitForm (e) {
    e.preventDefault();
    textName.textContent = nameInput.value;
    occupation.textContent = occupationInput.value;
    closeForm ()
  };
  function closeForm () {
    popup.classList.remove("popup_open");
  };
  

  openFormButton.addEventListener("click", openForm);
closeFormButton.addEventListener("click", closeForm);
popForm.addEventListener("submit", submitForm);

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

function createElement(data) {
  const elementTemplate = document.querySelector("#element-template").content;
  const elementContent = elementTemplate.querySelector(".element").cloneNode(true);
  const elementName = elementContent.querySelector(".element__name");
  elementName.textContent = data.name;
  const likeButton = elementContent.querySelector(".element__like-button");
  const elementImage = elementContent.querySelector(".element__image");
  elementImage.src = data.link;
  elementImage.alt = `Picture of ${data.name}`;
  const deleteButton = elementContent.querySelector(".card__delete-button");
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


initialElements.forEach((element) => renderElement(element, elementList));