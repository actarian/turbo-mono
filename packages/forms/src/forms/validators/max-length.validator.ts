import { FormValidator } from '../types';

/**
 * a max string length validator
 */
export function MaxLengthValidator(maxlength: number): FormValidator {
  return function (value) {
    if (value == null || maxlength == null) { // loose
      return null;
    }
    const length = value ? value.length : 0;
    return length > maxlength ? { minlength: { requiredLength: maxlength, actualLength: length } } : null;
  }
}
