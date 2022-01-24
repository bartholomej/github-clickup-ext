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

const CLICKUP_REGEX = /^\#?[a-zA-Z0-9]*$/;

export const isPrApproved = (status: string): boolean => {
  return status?.includes('Approved');
}

export const checkClickupId = (idRaw: string): boolean => {
  return idRaw?.length >= 4 && idRaw.length <= 8 && CLICKUP_REGEX.test(idRaw);
}

export const stripHash = (idRaw: string): string => {
  return idRaw?.split('#').length > 1 ? idRaw.split('#')[1] : idRaw;
}