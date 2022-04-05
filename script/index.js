const openformButton = document.querySelector(".profile__edit-button");
const closeformButton = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup");
const popForm = document.getElementById("form");

let nameInput = document.querySelector(".popup__form_type_name");
let occupationInput = document.querySelector(".popup__form_type_class");
let textName = document.querySelector(".profile__info-title");
let occupation = document.querySelector(".profile__info-class");

const openform = () => {
    nameInput.value = textName.textContent;
    occupationInput.value = occupation.textContent;
    popup.classList.add("popup_open");
  };

  const closeform = () => {
    popup.classList.remove("popup_open");
  };
  
  const submitForm = (e) => {
    e.preventDefault();
    textName.textContent = nameInput.value;
    occupation.textContent = occupationInput.value;
    popup.classList.remove("popup_open");
  };

  openformButton.addEventListener("click", openform);
closeformButton.addEventListener("click", closeform);
popForm.addEventListener("submit", submitForm);