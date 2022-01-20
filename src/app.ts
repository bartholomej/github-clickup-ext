/**
 * @class GithubClickup
 *
 * Github extension adds a small button within each
 * PR detail to show information about ClickUp tasks...
 *
 * @namespace GithubClickup
 * @author Bartholomej
 * @see https://github.com/bartholomej/github-clickup
 */

import { getClickupId, getPrItems } from './services/parser';
import { createClickupLink } from './services/renderer';

class GithubClickup {
  constructor() {
    const url = window.location.href.split('/');
    const domain = url[2];
    const page = url.pop();

    if (domain.includes('github.') && page === 'pulls') {
      const prItems = getPrItems();

      for (const prItem of prItems) {
        const title = prItem.querySelector('.markdown-title').textContent;
        const clickupId = getClickupId(title);

        if (title && clickupId) {
          const elem = prItem.querySelector('a.markdown-title ~ div');

          createClickupLink(elem, clickupId);
        }
      }
    }
  }
}

export default new GithubClickup();
