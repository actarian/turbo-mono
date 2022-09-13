import { FormValidator } from '../types';

/**
 * a min number value validator
 */
export function MinValidator(min: number): FormValidator {
  return function (value) {
    if (value == null || min == null) { // loose
      return null;
    }
    value = parseFloat(value);
    return !isNaN(value) && value < min ? { min: { min: min, actual: value } } : null;
  }
}
