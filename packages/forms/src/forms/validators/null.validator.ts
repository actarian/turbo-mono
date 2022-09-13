import { FormValidator } from '../types';

/**
 * a null validator
 */
export function NullValidator(): FormValidator {
  return function (value) {
    return null;
  };
}
