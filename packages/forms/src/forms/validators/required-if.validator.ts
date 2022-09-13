import { FormAbstract } from '../form-abstract';
import { FormValidator } from '../types';

/**
 * a required dependant on another field
 */
export function RequiredIfValidator(condition: (value: any, rootValue: any, control?: FormAbstract, root?: FormAbstract) => boolean): FormValidator {
  return function (value, rootValue, control, root) {
    // console.log('RequiredIfValidator', value, Boolean(condition(value)));
    if (Boolean(condition(value, rootValue, control, root)) === true) {
      return (value == null || value.length === 0) ? { required: true } : null;
    } else {
      return null;
    }
  };
}
