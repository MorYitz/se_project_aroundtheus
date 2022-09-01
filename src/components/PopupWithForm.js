import { Popup } from "./Popup.js"
export class PopupWithForm extends Popup {
constructor (PopupSelector, handleSubmit){
super(PopupSelector);
this._handleSubmit = handleSubmit;
this._form = this._popup.querySelector(".form")
}
_getInputValues(){
    const values = {};
   const inputs = [...this._form.querySelectorAll(".form__input")];
   inputs.forEach(input => {
    values[input.name] = input.value
   })
   return values

};
setEventListeners(){
super.setEventListeners();
this._form.addEventListener("submit",  (e) => {
    e.preventDefault();
    this._handleSubmit(this._getInputValues())} )
};

close(){
super.close();
this._form.reset()
};
}