import { FormAbstract } from './form-abstract';
import { FormAbstractCollection } from './form-abstract-collection';
import { FormOptions, FormValidator } from './types';

export class FormGroup extends FormAbstractCollection<{ [key: string]: FormAbstract }> {
  constructor(controls: { [key: string]: FormAbstract | any } = {}, validators?: FormValidator | FormValidator[], initialOptions?: FormOptions) {
    super(controls, validators);
    this.setInitialOptions(initialOptions);
    // this.revalidate_();
  }
}

export function formGroup(controls: { [key: string]: FormAbstract | any } = {}, validators?: FormValidator | FormValidator[]) {
  return new FormGroup(controls, validators);
}
