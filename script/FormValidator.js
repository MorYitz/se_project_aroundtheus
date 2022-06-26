// class FormValidator {
//   constructor(settings, formElement) {
//     this._settings = settings;
//     this._formElement = formElement;
//   }

//   _showInputError = (input, formElement, { errorClass }) => {
//     const errorSpan = formElement.querySelector("#" + input.id + "-error");

//     errorSpan.textContent = input.validationMessage;
//     errorSpan.classList.add(errorClass);
//   };
//   _toggleButto()
//   _hasValidInputs()

//   _setEventListeners(){
//     this._inputList = [...formElement.querySelectorAll(this._inputSelector)];
//   this._submitButton = formElement.querySelector(this._submitButtonSelector);
//   inputList.forEach((input) => {
//     input.addEventListener("input", (e) => {
//       checkInputValidity(formElement, input, settings);
//       toggleButton(inputList, submitButton, settings);
//     });
//   });
//   }
//   enableValidation() {
//     this._formElement.addEventListener("submit", (e) => e.preventDefault());
//     setEventListeners(formElement, rest);
//   }
// }

// const editFormValidator = new FormValidator();
// editFormValidator.enableValidation();
