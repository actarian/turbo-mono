import { FormAbstract } from './form-abstract';
import { FormAbstractCollection } from './form-abstract-collection';
import { FormOptions, FormValidator } from './types';

export class FormArray extends FormAbstractCollection<FormAbstract[]> {

  constructor(controls: FormAbstract[] = [], validators?: FormValidator | FormValidator[], initialOptions?: FormOptions) {
    super(controls, validators);
    this.setInitialOptions(initialOptions);
    // this.revalidate_();
  }

  forEach_(callback: (control: FormAbstract, key: number) => any) {
    this.controls.forEach((control: FormAbstract, key: number) => callback(control, key));
  }

  map_() {
    return this.controls;
  }

  get value(): any[] {
    return this.reduce_((result: any[], control: FormAbstract, key: number) => {
      result[key] = control.value;
      return result;
    }, []); // init as array
  }

  get length(): number {
    return this.controls.length;
  }

  protected init(control: FormAbstract, key: number): void {
    this.controls.length = Math.max(this.controls.length, key);
    this.controls[key] = this.initControl_(control, key);
  }

  set(control: FormAbstract, key: number): void {
    // this.controls.length = Math.max(this.controls.length, key);
    // this.controls[key] = this.initControl_(control);
    this.controls.splice(key, 1, this.initControl_(control, key));
  }

  add(control: FormAbstract, key: number): void {
    this.controls.length = Math.max(this.controls.length, key);
    this.controls[key] = this.initControl_(control, key);
  }

  push(control: FormAbstract): void {
    // this.controls.length = Math.max(this.controls.length, key);
    // this.controls[key] = this.initControl_(control);
    this.controls.push(this.initControl_(control, this.controls.length));
  }

  insert(control: FormAbstract, key: number): void {
    this.controls.splice(key, 0, this.initControl_(control, key));
  }

  remove(control: FormAbstract): void {
    const key: number = this.controls.indexOf(control);
    if (key !== -1) {
      this.removeKey(key);
    }
  }

  removeKey(key: number): void {
    if (this.controls.length > key) {
      this.controls.splice(key, 1);
    }
  }

  at(key: number) {
    return this.controls[key];
  }
}

export function formArray(controls: FormAbstract[] = [], validators?: FormValidator | FormValidator[]) {
  return new FormArray(controls, validators);
}
