export class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
    this._userAvatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent,
    };
  }

  setAvatarInfo(avatar) {
    this._userAvatar.src = avatar;
  }
  setUserInfo(fullName, className) {
    this._name.textContent = fullName;
    this._job.textContent = className;
  }
}
