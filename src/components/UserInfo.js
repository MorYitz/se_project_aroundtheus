export class UserInfo {
    constructor ({nameSelector, jobSelector}){
this._name = document.querySelector(nameSelector)
this._job = document.querySelector(jobSelector)
    }
    getUserInfo()
    { return{
        name: this._name.textContent,
        job: this._job.textContent
    } 

    }
    setUserInfo({fullName, className}){
        this._name.textContent = fullName;
        this._job.textContent = className;
    }
}