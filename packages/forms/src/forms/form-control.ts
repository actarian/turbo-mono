import { FormAbstract } from './form-abstract';
import { FormOptions, FormValidator } from './types';

export class FormControl extends FormAbstract {
  constructor(value: any = null, validators?: FormValidator | FormValidator[], initialOptions?: FormOptions) {
    super(value, validators);
    this.setInitialOptions(initialOptions);
    // this.revalidate_();
  }
}

export function formControl(value: any = null, validators?: FormValidator | FormValidator[]) {
  return new FormControl(value, validators);
}
