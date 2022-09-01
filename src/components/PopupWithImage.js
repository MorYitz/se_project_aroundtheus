import { Popup } from "./Popup.js"
export class popupWithImage extends Popup {
    constructor(popupSelector){
super(popupSelector)
    }

open(name, link){
    super.open()
    
 const caption = this._popup.querySelector(".popup__caption")
 const image = this._popup.querySelector(".popup__image");
 
 caption.textContent = name
 image.src = link;
}
}