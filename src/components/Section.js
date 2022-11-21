export class Section {
  constructor({ renderer }, classSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(classSelector);
  }

  renderItems(items) {
    items.forEach(this._renderer);
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
