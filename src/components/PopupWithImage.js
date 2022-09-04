import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._caption = this._popup.querySelector(".popup__caption");
    this._image = this._popup.querySelector(".popup__image");
  }

  open(name, link) {
    super.open();

    this._caption.textContent = name;
    this._image.src = link;
    this._image.alt = `Photo of ${name}`;
  }
}
