export class Card {
  constructor(data, cardTemplateSelector, handleImageClick) {
    this._elementTemplate =
      document.querySelector(cardTemplateSelector).content;
    this._data = data;
    this._handeImageClick = handleImageClick;
  }

  _handleDelete = () => {
    this._elementContent.remove();
    this._elementContent = null;
  };

  _handleLike = () => {
    this._likeButton.classList.toggle("element__button_liked");
  };

  _addEventListeners = () => {
    this._elementImage.addEventListener("click", () =>
      this._handeImageClick(this._data)
    );
    this._deleteButton.addEventListener("click", this._handleDelete);
    this._likeButton.addEventListener("click", this._handleLike);
  };

  _getElement = () => {
    return (this._elementContent = this._elementTemplate
      .querySelector(".element")
      .cloneNode(true));
  };

  createElement() {
    this._getElement();
    const elementName = this._elementContent.querySelector(".element__name");
    elementName.textContent = this._data.name;
    this._likeButton = this._elementContent.querySelector(
      ".element__like-button"
    );
    this._elementImage = this._elementContent.querySelector(".element__image");
    this._deleteButton = this._elementContent.querySelector(
      ".element__delete-button"
    );
    this._elementImage.src = this._data.link;
    this._elementImage.alt = `Picture of ${this._data.name}`;
    this._addEventListeners();
    return this._elementContent;
  }
}
