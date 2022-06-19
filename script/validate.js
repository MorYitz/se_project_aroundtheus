const showInputError = (input, formElement, { errorClass }) => {
  const errorSpan = formElement.querySelector("#" + input.id + "-error");

  errorSpan.textContent = input.validationMessage;
  errorSpan.classList.add(errorClass);
};
const hideInputError = (input, formElement, { errorClass }) => {
  const errorSpan = formElement.querySelector("#" + input.id + "-error");

  errorSpan.textContent = "";
  errorSpan.classList.remove(errorClass);
};

const checkInputValidity = (formElement, input, settings) => {
  if (input.validity.valid) {
    hideInputError(input, formElement, settings);
  } else {
    showInputError(input, formElement, settings);
  }
};
const hasValidInputs = (inputList) => {
  return inputList.every((input) => input.validity.valid === true);
};

const toggleButton = (inputList, submitButton, settings) => {
  if (hasValidInputs(inputList)) {
    submitButton.disabled = false;
    submitButton.classList.remove(settings.inactiveButtonClass);
  } else {
    submitButton.disabled = true;
    submitButton.classList.add(settings.inactiveButtonClass);
  }
};
const setEventListeners = (formElement, settings) => {
  const inputList = [...formElement.querySelectorAll(settings.inputSelector)];
  const submitButton = formElement.querySelector(settings.submitButtonSelector);
  inputList.forEach((input) => {
    input.addEventListener("input", (e) => {
      checkInputValidity(formElement, input, settings);
      toggleButton(inputList, submitButton, settings);
    });
  });
};
const enableValidation = (settings) => {
  const formElements = [...document.querySelectorAll(settings.formSelector)];
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => e.preventDefault());
    setEventListeners(formElement, settings);
  });
};

const settings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

enableValidation(settings);
