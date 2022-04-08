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
    popup.classList.remove("popup_open");
  };
  function closeForm () {
    popup.classList.remove("popup_open");
  };
  

  openFormButton.addEventListener("click", openForm);
closeFormButton.addEventListener("click", closeForm);
popForm.addEventListener("submit", submitForm);