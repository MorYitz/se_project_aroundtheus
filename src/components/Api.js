class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }
  getUserInfo() {
    return fetch(this._baseUrl + "/users/me", {
      headers: this._headers,
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)));
  }

  getCards() {
    return fetch(this._baseUrl + "/cards", {
      headers: this._headers,
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)));
  }

  editProfile(name, about) {
    return fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)));
  }

  addCard(name, link) {
    return fetch(this._baseUrl + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)));
  }

  deleteCard(cardID) {
    return fetch(this._baseUrl + "/cards/" + cardID, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)));
  }
  editAvatar(avatar) {
    return fetch(this._baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)));
  }

  likeCard(cardID) {
    return fetch(this._baseUrl + "/cards/likes/" + cardID, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)));
  }

  disLikeCard(cardID) {
    return fetch(this._baseUrl + "/cards/likes/" + cardID, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)));
  }
}

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "c123cc4f-c402-4ef4-8941-71c4e0fadea6",
    "Content-Type": "application/json",
  },
});
