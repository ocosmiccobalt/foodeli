import { isTab } from '../util/checkKey.js';

class Search {
  constructor(searchInputElem) {
    this.NOT_EMPTY_CLASS = `search--notempty`;
    this.HAS_FOCUS_CLASS = `search--hasfocus`;
    this.field = searchInputElem;
    this.form = this.field.form;
    this.button = this.form.querySelector(`button[type=submit]`);
  }

  init() {
    if (this.form !== null && this.button !== null) {
      this.button.setAttribute(`tabindex`, `-1`);

      this.field.addEventListener(`focus`, this.onSearchFieldEvent.bind(this));
      this.field.addEventListener(`blur`, this.onSearchFieldEvent.bind(this));
      this.field.addEventListener(`keydown`, this.onSearchFieldEvent.bind(this));
      this.form.addEventListener(`focusin`, this.onSearchFormFocus.bind(this));
      this.form.addEventListener(`focusout`, this.onSearchFormBlur.bind(this));
    }
  }

  onSearchFieldEvent(evt) {
    const eventType = evt.type;
    const value = evt.target.value.trim();

    this.form.classList.add(this.NOT_EMPTY_CLASS);
    this.button.setAttribute(`tabindex`, `0`);

    if (value === ``) {
      switch (eventType) {
        case `blur`:
          this.button.setAttribute(`tabindex`, `-1`);
          this.form.classList.remove(this.NOT_EMPTY_CLASS);
          break;

        case `keydown`:
          if (isTab(evt)) {
            this.button.setAttribute(`tabindex`, `-1`);
          }
          break;
      }
    }
  }

  onSearchFormFocus() {
    this.form.classList.add(this.HAS_FOCUS_CLASS);
  }

  onSearchFormBlur(evt) {
    const formContainsFocus = this.form.contains(evt.relatedTarget);

    if (!formContainsFocus) {
      this.form.classList.remove(this.HAS_FOCUS_CLASS);
    }
  }
}

export default Search;
