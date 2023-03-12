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
    this._text = data.name;
    this._link = data.link;
    this._id = data._id;
    this._handeImageClick = handleImageClick;
    this._handleDelete = handleDelete;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._handeLikeIcon = handeLikeIcon;
  }

  getId() {
    return this._id;
  }

  getUrl() {
    return this._link;
  }
  removeCard = () => {
    this._elementContent.remove();

    this._elementContent = null;
  };

  _addEventListeners = () => {
    this._elementImage.addEventListener('click', () =>
      this._handeImageClick(this._data)
    );
    this._deleteButton.addEventListener('click', this._handleDelete);
    this._likeButton.addEventListener('click', this._handeLikeIcon);
  };

  _getElement = () => {
    return this._elementTemplate.querySelector('.element').cloneNode(true);
  };

  setLikes(newlikes) {
    this._likes = newlikes;
    this._elementContent.querySelector('.element__like').textContent =
      this._likes.length;
    const isLikedByCurrentUser = this.isLiked();
    if (isLikedByCurrentUser) {
      this._likeButton.classList.add('element__button_liked');
    } else {
      this._likeButton.classList.remove('element__button_liked');
    }
  }

  isLiked() {
    return this._likes.find((person) => person._id === this._userId);
  }

  createElement() {
    this._elementContent = this._getElement();
    const elementName = this._elementContent.querySelector('.element__name');
    elementName.textContent = this._data.name;
    this._likeButton = this._elementContent.querySelector(
      '.element__like-button'
    );
    this._elementImage = this._elementContent.querySelector('.element__image');
    this._deleteButton = this._elementContent.querySelector(
      '.element__delete-button'
    );
    this._elementImage.src = this._data.link;
    this._elementImage.alt = `Picture of ${this._data.name}`;

    if (this._ownerId !== this._userId) {
      this._elementContent.querySelector(
        '.element__delete-button'
      ).style.display = 'none';
    }
    this.setLikes(this._likes);
    this._addEventListeners();

    return this._elementContent;
  }
}
