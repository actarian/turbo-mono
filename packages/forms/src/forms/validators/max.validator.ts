import { FormValidator } from '../types';

/**
 * a max number value validator
 */
export function MaxValidator(max: number): FormValidator {
  return function (value) {
    if (value == null || max == null) { // loose
      return null;
    }
    value = parseFloat(value);
    return !isNaN(value) && value > max ? { max: { max: max, actual: value } } : null;
  }
}
