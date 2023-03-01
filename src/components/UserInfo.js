export class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
    this._userAvatar = document.querySelector(".profile__image");
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent,
    };
  }

  setUserInfo(fullName, className, avatar) {
    this._name.textContent = fullName;
    this._job.textContent = className;
    this._userAvatar.src = avatar;
  }
}
