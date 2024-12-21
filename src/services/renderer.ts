/**
 * @class Renderer
 *
 * Class for DOM rendering
 *
 * @namespace GithubClickup
 * @author Bartholomej
 * @see https://github.com/bartholomej/github-clickup
 */

export const createClickupLinkForPrList = (element: Element, clickupId: string): void => {
  const href = `https://app.clickup.com/t/${clickupId}`;
  const a = document.createElement('a');

  a.href = href;
  a.textContent = clickupId;
  a.target = '_blank';
  a.ariaLabel = chrome.i18n.getMessage('goToClickUp') + ' #' + clickupId;
  a.classList.add('clickup-link');

  element.insertAdjacentElement('afterend', a);
}

export const createClickupLinkForPrDetail = (element: Element, clickupId: string): void => {
  const href = `https://app.clickup.com/t/${clickupId}`;
  const nodeToAppend = element.cloneNode(true) as Element;

  const a = nodeToAppend.querySelector('a');

  if (a) {
    a.href = href;
    a.textContent = clickupId;
    a.target = '_blank';
    a.ariaLabel = chrome.i18n.getMessage('goToClickUp') + ' #' + clickupId;
    nodeToAppend.classList.add('clickup-link--detail');

    element.parentElement.appendChild(nodeToAppend);
  }
}
