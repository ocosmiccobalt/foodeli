const replaceAnchorsWithButtons = (selector) => {
  const anchors = document.querySelectorAll(selector);

  const setCopiedAttributes = (anchor, button) => {
    const attributes = [
      ...anchor.attributes
    ].filter((attr) => attr.name !== `href`);

    for (const attr of attributes) {
      const attrName = (attr.name === `data-aria-controls`) ? `aria-controls` : attr.name;

      button.setAttribute(attrName, attr.value);
    }
  };

  anchors.forEach((anchor) => {
    const button = document.createElement(`button`);

    setCopiedAttributes(anchor, button);

    button.type = `button`;
    button.innerHTML = anchor.innerHTML;
    anchor.parentElement.replaceChild(button, anchor);
  });
};

export default replaceAnchorsWithButtons;
