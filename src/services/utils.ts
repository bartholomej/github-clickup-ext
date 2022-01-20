/**
 * @class Utils
 *
 * Class for utilities
 *
 * @namespace GithubClickup
 * @author Bartholomej
 * @see https://github.com/bartholomej/github-clickup
 */

export const isProd = process.env.NODE_ENV === 'production';
export const isDev = process.env.NODE_ENV === 'development';

export const isPrApproved = (status: string): boolean => {
  if (status?.includes('Approved')) {
    return true;
  }
  return false;
}
