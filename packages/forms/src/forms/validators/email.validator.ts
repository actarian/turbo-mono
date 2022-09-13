import { FormValidator } from '../types';

/**
 * an email pattern validator
 */
export function EmailValidator(): FormValidator {
  const regex = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return function (value) {
    if (!value) {
      return null;
    }
    return regex.test(value) ? null : { email: true };
  }
}
