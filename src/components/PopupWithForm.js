import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector(".form");
    this._buttonSubmit = this._popup.querySelectorAll('.popup__submit-button');
    this._buttonSubmitText = this._buttonSubmit.textContent;
    this._inputs = [...this._form.querySelectorAll(".form__input")];
  }

  _getInputValues() {
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleSubmit(this._getInputValues());
    });
  }

  loadingRender(isLoading, textLoading = "saving...") {
    isLoading ? this._buttonSubmit.textContent = textLoading : this._buttonSubmit.textContent = this._buttonSubmitText;
}

  close() {
    super.close();
    this._form.reset();
  }
}
