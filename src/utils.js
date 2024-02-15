/**
 * @param {string} text
 * @returns {HTMLParagraphElement}
 */
export function createParagraph (text) {
  const domParagraph = document.createElement('p');
  domParagraph.textContent = text;
  return domParagraph;
}

/**
 * @returns {HTMLButtonElement}
 */
export function createOptionsButton () {
  const domOptionsButton = document.createElement('button');
  domOptionsButton.textContent = 'Options';
  domOptionsButton.addEventListener('click', function () {
    chrome.runtime.openOptionsPage();
  });
  return domOptionsButton;
}