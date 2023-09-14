import replaceAnchorsWithButtons from './util/replaceAnchorsWithButtons.js';
import Nav from './components/nav.js';

const init = (Component, elemSelector, ...rest) => {
  const elem = document.querySelector(elemSelector);

  if (elem !== null) {
    const instance = new Component(elem, ...rest);
    instance.init();
  }
};

const work = () => {
  replaceAnchorsWithButtons(`a[data-a11y-dialog-show], a[data-aria-controls]`);
  init(Nav, `.main-nav`);
};

if (document.readyState === `loading`) {
  document.addEventListener(`DOMContentLoaded`, work);
} else {
  work();
}
