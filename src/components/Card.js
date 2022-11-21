export class Card {
  constructor(data, cardTemplateSelector, handleImageClick, handleDelete) {
    this._elementTemplate =
      document.querySelector(cardTemplateSelector).content;
    this._data = data;
    this._handeImageClick = handleImageClick;
    this._handleDelete = handleDelete;
    this._likes = likes;
  }

  // _handleDelete = () => {
  //   this._elementContent.remove();

  //   this._elementContent = null;
  // };

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
    return this._elementTemplate.querySelector(".element").cloneNode(true);
  };

  _setLikesAmount() {
    const likes = this._likes.length;
    this._elementContent.querySelector(".element__likes").textContent =
      likesAmount;
  }

  createElement() {
    this._elementContent = this._getElement();
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
     this._setLikesAmount();
    return this._elementContent;
  }
}
