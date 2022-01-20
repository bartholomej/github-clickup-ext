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
  const lastLink = element.lastElementChild;
  const nodeToAppend = lastLink.cloneNode(true) as Element;
  const a = nodeToAppend.querySelector('a');
  a.href = href;
  a.textContent = clickupId;
  a.target = '_blank';
  a.ariaLabel = 'Clickup link';
  a.classList.add('clickup-link');

  element.appendChild(nodeToAppend);
}


export const createClickupLinkForPrDetail = (element: Element, clickupId: string): void => {
  const href = `https://app.clickup.com/t/${clickupId}`;
  const nodeToAppend = element.cloneNode(true) as Element;

  const a = nodeToAppend.querySelector('a');
  a.href = href;
  a.textContent = clickupId;
  a.target = '_blank';
  a.ariaLabel = 'Clickup link';
  nodeToAppend.classList.add('clickup-link--detail');

  element.parentElement.appendChild(nodeToAppend);
}
