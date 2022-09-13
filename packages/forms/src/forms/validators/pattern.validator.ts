import { FormValidator } from '../types';

/**
 * a regex pattern validator
 */
export function PatternValidator(pattern: string | RegExp): FormValidator {
  return function (value) {
    if (value == null || pattern == null) { // loose
      return null;
    }
    const regex = patternToRegEx(pattern);
    return regex.test(value) ? null : { pattern: { requiredPattern: regex.toString(), actualValue: value } };
  }
}

function patternToRegEx(pattern: string | RegExp) {
  let regex;
  if (pattern instanceof RegExp) {
    regex = pattern;
  } else if (typeof pattern === 'string') {
    pattern = pattern.charAt(0) === '^' ? pattern : `^${pattern}`;
    pattern = pattern.charAt(pattern.length - 1) === '$' ? pattern : `${pattern}$`;
    regex = new RegExp(pattern);
  }
  return regex || new RegExp('');
}
