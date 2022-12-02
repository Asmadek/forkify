import icons from 'url:../../img/icons.svg';
import View from './View.js';

class paginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    // Page 1,and there are other pages

    // Page 2,and there are other pages

    // Last page

    // Other page

    return `
    <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="src/img/icons.svg#icon-arrow-left"></use>
        </svg>
        <span>Page 1</span>
    </button>
    <button class="btn--inline pagination__btn--next">
        <span>Page 3</span>
        <svg class="search__icon">
            <use href="src/img/icons.svg#icon-arrow-right"></use>
        </svg>
    </button>
    `;
  }
}

export default new paginationView();
