import { FormAbstract } from '../form-abstract';
import { FormValidator } from '../types';
import { validValue } from '../utils';

/**
 * an equality match validation on another field
 */
export function MatchValidator(getOtherValue: (value: any, rootValue: any, control?: FormAbstract, root?: FormAbstract) => any): FormValidator {
  return function (value, rootValue, control, root) {
    let otherValue = getOtherValue(value, rootValue, control, root);
    otherValue = validValue(otherValue);
    return value !== otherValue ? { match: { value: value, match: otherValue } } : null;
  }
}
