export class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
  }
  _checkInputValidity = (input) => {
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
  _enableButton = (submitButton) => {
    submitButton.disabled = false;
    submitButton.classList.remove(this._settings.inactiveButtonClass);
  };
  _disableButton = (submitButton) => {
    submitButton.disabled = true;
    submitButton.classList.add(this._settings.inactiveButtonClass);
  };
  _toggleButton = (inputList, submitButton) => {
    if (!this._hasValidInputs(inputList)) {
      this._disableButton(submitButton);
    } else {
      this._enableButton(submitButton);
    }
  };

  _hasValidInputs = (inputList) => {
    return inputList.every((input) => input.validity.valid === true);
  };
  _setEventListeners() {
    const inputList = [
      ...this._formElement.querySelectorAll(this._settings.inputSelector),
    ];
    const submitButton = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );
    inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButton(inputList, submitButton);
      });
    });
  }
  //   resetForm() {
  //     this._formElement.reset();
  //     // this._inputList.forEach(this._hideInputError);
  //     this._disableButton();
  //   }
  enableValidation() {
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners();
  }
}
