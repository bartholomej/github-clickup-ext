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
  const titles = Array.from(document.querySelectorAll('.js-issue-row'));
  return titles;
}

export const getClickupId = (title: string): string => {
  const id = title.split(' ')[0].trim();
  if (id.length >= 4 && id.length <= 8 && !id.includes(':')) {
    return id.toLocaleLowerCase();
  } else {
    return null;
  }
}

