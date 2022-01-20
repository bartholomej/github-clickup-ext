/**
 *
 * Github extension adds a small button within each
 * PR detail to show information about ClickUp tasks...
 *
 * @namespace GithubClickup
 * @author Bartholomej
 * @see https://github.com/bartholomej/github-clickup
 */

import { getClickupIdFromBranchName, getClickupIdFromPrTitle, getPrBranch, getPrItems } from './services/parser';
import { createClickupLinkForPrDetail, createClickupLinkForPrList } from './services/renderer';

const githubClickup = () => {
  const url = window.location.href.split('/');
  const domain = url[2];
  const isPrList = url.pop() === 'pulls';
  const isPrPage = url[5] === 'pull';
  // List of PRs
  if (domain.includes('github.com')) {
    if (isPrList) {
      const prItems = getPrItems();

      for (const prItem of prItems) {
        const title = prItem.querySelector('.markdown-title').textContent;
        const clickupId = getClickupIdFromPrTitle(title);

        if (title && clickupId) {
          const elem = prItem.querySelector('a.markdown-title ~ div');

          createClickupLinkForPrList(elem, clickupId);
        }
      }
    }

    // List of PRs
    if (isPrPage) {
      const prBranch = getPrBranch();
      const clickupId = getClickupIdFromBranchName(prBranch?.textContent);

      createClickupLinkForPrDetail(prBranch, clickupId);
    }
  }
}


export default githubClickup();
