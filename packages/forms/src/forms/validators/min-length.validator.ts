import { FormValidator } from '../types';

/**
 * a min string length validator
 */
export function MinLengthValidator(minlength: number): FormValidator {
  return function (value) {
    if (value == null || minlength == null) { // loose
      return null;
    }
    const length = value ? value.length : 0;
    return length < minlength ? { minlength: { requiredLength: minlength, actualLength: length } } : null;
  }
}
