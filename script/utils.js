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
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});
function openPopup(popup) {
  document.addEventListener("keydown", closeWithEscape);
  document.addEventListener("mousedown", clickOutsideToClose);
  popup.classList.add("popup_open");
}

function fillProfileFormFields() {
  nameInput.value = textName.textContent;
  occupationInput.value = occupation.textContent;
}

function closePopup(popup) {
  document.removeEventListener("mousedown", clickOutsideToClose);
  document.removeEventListener("keydown", closeWithEscape);
  popup.classList.remove("popup_open");
}

function handleProfileFormSubmit(e) {
  e.preventDefault();
  textName.textContent = nameInput.value;
  occupation.textContent = occupationInput.value;
  closePopup(profilePopup);
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

function closeWithEscape(evt) {
  const currentPopup = document.querySelector(".popup_open");
  if (evt.key === "Escape") {
    closePopup(currentPopup);
  }
}

function clickOutsideToClose(evt) {
  const currentPopup = document.querySelector(".popup_open");
  if (evt.target.classList.contains("popup")) {
    closePopup(currentPopup);
  }
}

export {
  clickOutsideToClose,
  closeWithEscape,
  previewImage,
  handleProfileFormSubmit,
  closePopup,
  fillProfileFormFields,
  openPopup,
  profileForm,
};
