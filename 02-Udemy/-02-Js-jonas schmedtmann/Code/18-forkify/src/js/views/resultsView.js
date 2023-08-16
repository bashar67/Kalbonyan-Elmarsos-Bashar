import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // parcle 2

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'NO recipe found for your query! Please try again!🕸';
  _successMessage = '';

  _generatMarkup() {
    // console.log(this._data);
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new ResultView();
