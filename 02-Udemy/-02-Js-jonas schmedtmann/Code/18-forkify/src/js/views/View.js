import icons from 'url:../../img/icons.svg'; // parcle 2

export default class View {
  _data;

  /**
   * render the recived object to the dom
   * @param {object | object[]} data the data to be renderd (e.g. recipe)
   * @param {boolean} [render=true] if false, creat markup string instead of rendering to the dom
   * @returns {undefined | string} a markup string is returned if render = false
   * @this {object} View instance
   * @author bashar yousri
   * @todo finish implementation in the pdf
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markUp = this._generatMarkup();

    if (!render) return markUp;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }

  update(data) {
    this._data = data;
    const newMarkUp = this._generatMarkup();

    //& convert html to node dom object on the memory
    const newDom = document.createRange().createContextualFragment(newMarkUp);
    const newElement = Array.from(newDom.querySelectorAll('*'));
    const curElement = Array.from(this._parentElement.querySelectorAll('*'));

    newElement.forEach((newEl, i) => {
      const curEl = curElement[i];

      //update changed text
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        // console.log('🎇', newEl.firstChild?.nodeValue.trim());
        curEl.textContent = newEl.textContent;
      }

      //update changed attruibuts
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr => {
          curEl.setAttribute(attr.name, attr.value);
        });
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner = function () {
    const markUp = `
    <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  };

  renderError(message = this._errorMessage) {
    const markUp = `
    <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }

  renderMessage(message = this._successMessage) {
    const markUp = `
    <div class="message">
          <div>
            <svg>
              <use href="${icons}#icon-smile"></use>
            </svg>
            </div>
            <p>${message}</p>
          </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }
}
