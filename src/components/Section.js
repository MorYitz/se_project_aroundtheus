export class Section {
  constructor({ items, renderer }, classSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(classSelector);
  }

  renderItems() {
    this._items.forEach(this._renderer);
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
