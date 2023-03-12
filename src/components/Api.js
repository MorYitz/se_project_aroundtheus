class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  getUserInfo() {
    return this._request(this._baseUrl + '/users/me', {
      headers: this._headers,
    });
  }

  getCards() {
    return this._request(this._baseUrl + '/cards', {
      headers: this._headers,
    });
  }

  editProfile(name, about) {
    return this._request(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    });
  }

  addCard(name, link) {
    return this._request(this._baseUrl + '/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    });
  }

  deleteCard(cardID) {
    return this._request(this._baseUrl + '/cards/' + cardID, {
      method: 'DELETE',
      headers: this._headers,
    });
  }
  editAvatar(avatar) {
    return this._request(this._baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    });
  }

  likeCard(cardID) {
    return this._request(this._baseUrl + '/cards/likes/' + cardID, {
      method: 'PUT',
      headers: this._headers,
    });
  }

  disLikeCard(cardID) {
    return this._request(this._baseUrl + '/cards/likes/' + cardID, {
      method: 'DELETE',
      headers: this._headers,
    });
  }
}

export const api = new Api({
  baseUrl: 'https://around.nomoreparties.co/v1/cohort-3-en',
  headers: {
    authorization: 'c123cc4f-c402-4ef4-8941-71c4e0fadea6',
    'Content-Type': 'application/json',
  },
});
