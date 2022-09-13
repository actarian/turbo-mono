import { FormValidator } from '../types';

/**
 * a required validator
 */
export function RequiredValidator(): FormValidator {
  return function (value) {
    // console.log('RequiredValidator', value, (value == null || value.length === 0) ? { required: true } : null);
    return value == null || value.length === 0 ? { required: true } : null;
  };
  // return (value == null || value.length === 0) ? 'required' : null;
}
