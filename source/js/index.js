import replaceAnchorsWithButtons from './util/replaceAnchorsWithButtons.js';

const work = () => {
  replaceAnchorsWithButtons(`a[data-a11y-dialog-show], a[data-aria-controls]`);
};

if (document.readyState === `loading`) {
  document.addEventListener(`DOMContentLoaded`, work);
} else {
  work();
}
