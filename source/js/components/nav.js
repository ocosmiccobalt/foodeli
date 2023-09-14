class Nav {
  constructor(navElem) {
    this.BUTTON_CLASS = `main-nav__toggle`;
    this.MENU_CLASS = `site-list`;
    this.DROPDOWN_BUTTON_CLASS = `dropdown__title`;
    this.DROPDOWN_MENU_CLASS = `dropdown__list`;
    this.nav = navElem;
    this.button = this.nav.querySelector(`.${this.BUTTON_CLASS}`);
    this.menu = this.nav.querySelector(`.${this.MENU_CLASS}`);
    this.buttons = [this.button];
    this.menus = [this.menu];
  }

  init() {
    if (this.button !== null && this.menu !== null) {
      const dropdownButtons = this.menu.querySelectorAll(
        `.${this.DROPDOWN_BUTTON_CLASS}`
      );

      dropdownButtons.forEach((btn) => {
        this.buttons.push(btn);
        this.menus.push(btn.nextElementSibling);
      });

      this.buttons.forEach((btn, i) => {
        btn.classList.remove(
          `${i === 0 ? this.BUTTON_CLASS : this.DROPDOWN_BUTTON_CLASS}--nojs`
        );
        this.menus[i].classList.remove(
          `${i === 0 ? this.MENU_CLASS : this.DROPDOWN_MENU_CLASS}--nojs`
        );
        btn.setAttribute(`aria-expanded`, false);
        btn.addEventListener(`click`, this.onButtonClick.bind(this));
      });
    }
  }

  onButtonClick(evt) {
    const target = evt.currentTarget;
    const i = this.buttons.indexOf(target);
    const expanded = target.getAttribute(`aria-expanded`) === `true`;

    target.setAttribute(`aria-expanded`, !expanded);
    target.classList.toggle(
      `${i === 0 ? this.BUTTON_CLASS : this.DROPDOWN_BUTTON_CLASS}--open`
    );
    this.menus[i].classList.toggle(
      `${i === 0 ? this.MENU_CLASS : this.DROPDOWN_MENU_CLASS}--open`
    );
  }
}

export default Nav;
