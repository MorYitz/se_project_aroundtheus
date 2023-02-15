export class Card {
  constructor(
    data,
    userId,
    cardTemplateSelector,
    handleImageClick,
    handleDelete,
    handeLikeIcon
  ) {
    this._elementTemplate =
      document.querySelector(cardTemplateSelector).content;
    this._data = data;
    this._id = data._id;
    this._handeImageClick = handleImageClick;
    this._handleDelete = handleDelete;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._handeLikeIcon = handeLikeIcon;
  }

  removeCard = () => {
    this._elementContent.remove();

    this._elementContent = null;
  };

  //  _handleLike = () => {
  //    this._likeButton.classList.toggle("element__button_liked");
  //  };

  _addEventListeners = () => {
    this._elementImage.addEventListener("click", () =>
      this._handeImageClick(this._data)
    );
    this._deleteButton.addEventListener("click", this._handleDelete);
    this._likeButton.addEventListener("click", this._handeLikeIcon);
  };

  _getElement = () => {
    return this._elementTemplate.querySelector(".element").cloneNode(true);
  };

  heartLiked(newLikes) {
    this._likes = newLikes;
    this._elementContent.querySelector(".element__like").textContent =
      this._likes.length;

    const isLiked = this._likes.find((person) => person._id === this._userId);
    if (isLiked) {
      this._likeButton.classList.toggle("element__button_liked");
    }
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

    if (this._ownerId !== this._userId) {
      this._elementContent.querySelector(
        ".element__delete-button"
      ).style.display = "none";
    }
    this._addEventListeners();
    this.heartLiked(this._likes);

    return this._elementContent;
  }
}
