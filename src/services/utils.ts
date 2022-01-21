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

export const checkClickupId = (idRaw: string): boolean => {
  if (idRaw?.length >= 4 && idRaw.length <= 8 && !idRaw.includes(':')) {
    return true;
  }
  return false;
}
export const stripHash = (idRaw: string): string => {
  return idRaw?.split('#').length > 1 ? idRaw.split('#')[1] : idRaw;
}