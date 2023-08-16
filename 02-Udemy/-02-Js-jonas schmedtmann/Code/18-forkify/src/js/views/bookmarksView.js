import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // parcle 2

class BookmarkView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. please add more recipes 🍽';
  _successMessage = '';

  addHandlerRender(handelr) {
    window.addEventListener('load', handelr);
  }

  _generatMarkup() {
    console.log(this._data);
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarkView();
