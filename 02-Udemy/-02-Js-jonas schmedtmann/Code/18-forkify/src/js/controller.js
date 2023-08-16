import * as moadel from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 0) update results view to mark selected search result
    resultsView.update(moadel.getSearchResultsPage());

    // updating bookmarks view
    bookmarksView.update(moadel.state.bookmarks);

    //! loading recipe
    await moadel.loadRecipe(id);

    //! rendering recipe on the DOM
    recipeView.render(moadel.state.recipe);
  } catch (err) {
    console.log(err);
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    //!1. get search query
    const query = searchView.getQuery();
    if (!query) return;

    //!2.load search results
    await moadel.loadSearchResults(query);

    //!3. render result
    // resultsView.render(moadel.state.search.reaults);
    resultsView.render(moadel.getSearchResultsPage());

    //!4. render initial pagination buttons
    paginationView.render(moadel.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (gotoPage) {
  //* 1) render new results
  resultsView.render(moadel.getSearchResultsPage(gotoPage));

  //* 2) render new pagination buttons
  paginationView.render(moadel.state.search);
};

const controlServings = function (newServings) {
  // & updat the recipe  servings (in state)
  moadel.updateServings(newServings);

  //~ updat the recipe view
  // recipeView.render(moadel.state.recipe);
  recipeView.update(moadel.state.recipe);
};

const controlAddBookmark = function () {
  // add/remove bookmarks
  if (!moadel.state.recipe.bookmarked) moadel.addBookmark(moadel.state.recipe);
  else moadel.deletBookmark(moadel.state.recipe.id);

  // update recipe view
  recipeView.update(moadel.state.recipe);

  // render bookmarks
  bookmarksView.render(moadel.state.bookmarks);
};

const controlBookmark = function () {
  bookmarksView.render(moadel.state.bookmarks);
};

const controlAddRicepe = async function (newRecipe) {
  try {
    // show loading spinner
    addRecipeView.renderSpinner();

    // upload the new recipe data
    await moadel.uploadRecipe(newRecipe);
    console.log(moadel.state.recipe);

    // Render recipe
    recipeView.render(moadel.state.recipe);

    //success message
    addRecipeView.renderMessage();

    // render bookmark view
    bookmarksView.render(moadel.state.bookmarks);

    //change id in the url
    // pusState allow us update the url without reload the page
    window.history.pushState(null, '', `#${moadel.state.recipe.id}`);

    // close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.log('🎇', err);
    addRecipeView.renderError(err.message);
  }
};

//^ publisher subscriber pattern
const init = function () {
  bookmarksView.addHandlerRender(controlBookmark);
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerRenderUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHndlerClick(controlPagination);
  addRecipeView.addHendlerUpload(controlAddRicepe);
  console.log('welcome');
};
init();
