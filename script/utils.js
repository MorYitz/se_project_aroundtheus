function openPopup(popup) {
  document.addEventListener("keydown", closeWithEscape);
  document.addEventListener("mousedown", clickOutsideToClose);
  popup.classList.add("popup_open");
}

function closePopup(popup) {
  document.removeEventListener("mousedown", clickOutsideToClose);
  document.removeEventListener("keydown", closeWithEscape);
  popup.classList.remove("popup_open");
}

function closeWithEscape(evt) {
  if (evt.key === "Escape") {
    const currentPopup = document.querySelector(".popup_open");
    closePopup(currentPopup);
  }
}

function clickOutsideToClose(evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
}

export { clickOutsideToClose, closeWithEscape, closePopup, openPopup };
