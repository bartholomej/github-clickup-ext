/**
 * @class Parser
 *
 * Class for DOM parsing
 *
 * @namespace GithubClickup
 * @author Bartholomej
 * @see https://github.com/bartholomej/github-clickup
 */

export const getPrItems = (): Element[] => {
  const prNodes = Array.from(document.querySelectorAll('.js-issue-row'));
  return prNodes;
}

export const getPrBranch = (): Element => {
  const branchNode = document.querySelector('.head-ref');
  return branchNode;
}

export const getClickupIdFromPrTitle = (title: string): string => {
  const id = title.split(' ')[0].trim();
  if (id.length >= 4 && id.length <= 8 && !id.includes(':')) {
    return id.toLocaleLowerCase();
  } else {
    return null;
  }
}

export const getClickupIdFromBranchName = (title: string): string => {
  const id = title.split('-')[0].trim();
  if (id.length >= 4 && id.length <= 8 && !id.includes(':')) {
    return id.toLocaleLowerCase();
  } else {
    return null;
  }
}

export const getMyUserName = (): string => {
  const meta = document.querySelector('meta[name="user-login"]');
  return meta?.getAttribute('content') || null;
}

export const getUserNodeFromPrList = (element: Element): Element => {
  const user = element.querySelector('a[data-hovercard-type="user"]');
  return user;
}


export const getPrStatusNodeOnList = (element: Element): Element => {
  const elem = element.querySelector('a.markdown-title ~ div');
  const statusNode = Array.from(elem.querySelectorAll('a')).filter(x => x.textContent.includes('Approved') || x.textContent.includes('Review') || x.textContent.includes('Changes requested'))[0];
  return statusNode;
}

