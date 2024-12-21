/**
 * @class Parser
 *
 * Class for DOM parsing
 *
 * @namespace GithubClickup
 * @author Bartholomej
 * @see https://github.com/bartholomej/github-clickup
 */

import { checkClickupId, stripHash } from "./utils";

export const getPrItems = (): Element[] => {
  const prNodes = Array.from(document.querySelectorAll('.js-issue-row'));
  return prNodes;
}

export const getPrBranch = (): Element => {
  const branchNode = document.querySelector('.head-ref');
  return branchNode;
}

export const getClickupIdFromPrTitle = (title: string): string => {
  const wordsInTitle = title.split(' ');
  const hashId = wordsInTitle.find((word) => word.startsWith('#') && checkClickupId(word));

  if (hashId) {
    return stripHash(hashId).toLocaleLowerCase();
  } else {
    const firstWord = wordsInTitle[0].trim();
    if (checkClickupId(firstWord)) {
      return firstWord.toLocaleLowerCase();
    }
  }
  return null;
}

export const getClickupIdFromBranchName = (title: string): string => {
  const id = title.split('-')[0].trim().split('/').at(-1);

  if (checkClickupId(id)) {
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

