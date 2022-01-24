/**
 *
 * Github extension adds a small button within each
 * PR detail to show information about ClickUp tasks...
 *
 * @namespace GithubClickup
 * @author Bartholomej
 * @see https://github.com/bartholomej/github-clickup
 */

import { getClickupIdFromBranchName, getClickupIdFromPrTitle, getMyUserName, getPrBranch, getPrItems, getPrStatusNodeOnList, getUserNodeFromPrList } from './services/parser';
import { createClickupLinkForPrDetail, createClickupLinkForPrList } from './services/renderer';
import { isPrApproved } from './services/utils';

const githubClickup = () => {
  const url = window.location.href.split('/');
  const domain = url[2];
  const page = url[5]?.split('?')[0];
  const isPrList = page === 'pulls';
  const isPrPage = page === 'pull';

  // List of PRs
  if (domain.includes('github.com')) {
    if (isPrList) {
      const prItems = getPrItems();

      for (const prItem of prItems) {
        // Highlight my PRs
        highlighMyPrs(prItem);

        // Add ClickUp link
        addClickupLink(prItem);

        // PR status
        higlightPrStatus(prItem);
      }
    }

    // Detail of PR
    if (isPrPage) {
      const prBranch = getPrBranch();
      const clickupId = getClickupIdFromBranchName(prBranch?.textContent);

      createClickupLinkForPrDetail(prBranch, clickupId);
    }
  }
}


const higlightPrStatus = (item: Element): void => {
  const prStatusNode = getPrStatusNodeOnList(item);
  const isApproved = isPrApproved(prStatusNode?.textContent);

  if (isApproved) {
    prStatusNode?.classList.add('pr-list-status-approved');
  } else {
    prStatusNode?.classList.add('pr-list-status-review');
  }
}

const addClickupLink = (item: Element): void => {
  const title = item.querySelector('.markdown-title').textContent;
  const clickupId = getClickupIdFromPrTitle(title);

  if (title && clickupId) {
    const elem = item.querySelector('a.markdown-title ~ div');
    createClickupLinkForPrList(elem, clickupId);
  }
}

const highlighMyPrs = (item: Element): void => {
  const me = getMyUserName();
  const prUser = getUserNodeFromPrList(item);

  if (me) {
    if (me === prUser?.textContent) {
      prUser?.classList.add('pr-list-me');
    } else {
      prUser?.classList.add('pr-list-other');
    }
  }
}

export default githubClickup();
