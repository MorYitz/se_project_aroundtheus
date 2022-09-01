export class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
    this._inputList = [
      ...this._formElement.querySelectorAll(this._settings.inputSelector),
    ];
    this._submitButton = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );
  }
  _toggleInputError = (input) => {
    if (input.validity.valid) {
      this._hideInputError(input);
    } else {
      this._showInputError(input);
    }
  };

  _showInputError = (input) => {
    const errorSpan = this._formElement.querySelector(
      "#" + input.id + "-error"
    );
    input.classList.add(this._settings.inputErrorClass);
    errorSpan.textContent = input.validationMessage;
    errorSpan.classList.add(this._settings.errorClass);
  };

  _hideInputError = (input) => {
    const errorSpan = this._formElement.querySelector(
      "#" + input.id + "-error"
    );
    input.classList.remove(this._settings.inputErrorClass);
    errorSpan.textContent = "";
    errorSpan.classList.remove(this._settings.errorClass);
  };

  _enableButton = () => {
    this._submitButton.disabled = false;
    this._submitButton.classList.remove(this._settings.inactiveButtonClass);
  };

  disableButton = () => {
    this._submitButton.disabled = true;
    this._submitButton.classList.add(this._settings.inactiveButtonClass);
  };

  _toggleButton = () => {
    if (!this._hasValidInputs()) {
      this.disableButton();
    } else {
      this._enableButton();
    }
  };

  _hasValidInputs = () => {
    return this._inputList.every((input) => input.validity.valid === true);
  };
  _setEventListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._toggleInputError(input);
        this._toggleButton();
      });
    });
  };

  resetValidation() {
    this._toggleButton();
    this._inputList.forEach(this._hideInputError);
  };
  
  enableValidation() {
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners();
  }
}
