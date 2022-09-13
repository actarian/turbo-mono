import { FormValidator } from '../types';

/**
 * a required and true validator
 */
export function RequiredTrueValidator(): FormValidator {
  return function (value) {
    // console.log('RequiredTrueValidator', value, value === true ? null : { required: true });
    return value === true ? null : { required: true };
  };
}
