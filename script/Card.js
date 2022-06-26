export class Card {
  constructor(data, cardTemplateSelector, handleImageClick) {
    this._elementTemplate =
      document.querySelector(cardTemplateSelector).content;
    this._data = data;
    this._handeImageClick = handleImageClick;
  }
  _previewImage(card) {
    popupImage.src = card.link;
    popupImage.alt = `A picture of ${card.name}`;
    popupCaption.textContent = card.name;
    openPopup(imgPreviewPopup);
  }
  _toggleClass(component, cl) {
    component.classList.toggle(cl);
  }
  _disableButton = (submitButton, settings) => {
    submitButton.disabled = true;
    submitButton.classList.add(settings.inactiveButtonClass);
  };
  _addEventListeners = () => {
    this._elementImage.addEventListener("click", () =>
      this._handeImageClick(this._data)
    );
    this._deleteButton.addEventListener("click", () =>
      this._elementContent.remove()
    );
    this._likeButton.addEventListener("click", () => this._toggleClass);
    this._disableButton(placeSubmitButton, settings);
  };

  _createElement() {
    this._elementContent = this._elementTemplate
      .querySelector(".element")
      .cloneNode(true);
    const elementName = elementContent.querySelector(".element__name");
    elementName.textContent = data.name;
    this._likeButton = this._elementContent.querySelector(
      ".element__like-button"
    );
    this._elementImage = this._elementContent.querySelector(".element__image");
    this._deleteButton = this._elementContent.querySelector(
      ".element__delete-button"
    );
    elementImage.src = this._data.link;
    elementImage.alt = `Picture of ${this._data.name}`;
    this._addEventListeners();
    return this._elementContent;
  }
}
