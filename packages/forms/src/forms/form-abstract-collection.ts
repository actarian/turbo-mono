import { FormAbstract } from './form-abstract';
import { FormControl } from './form-control';
import { FormActivator, FormCollection, FormControls, FormOptions, FormValidator } from './types';
import { isThenable } from './utils';

export class FormAbstractCollection<T extends FormControls> extends FormAbstract {

  controls_: T;

  constructor(controls: T, validators?: (FormValidator | FormValidator[])) {
    super(null, validators);
    this.controls_ = controls;
    // console.log(validators, this.validators);
    this.forEach_((control: FormAbstract, key: keyof T) => {
      this.controls_[key] = this.initControl_(control, key) as unknown as T[keyof T];
    });
  }

  initControl_(controlOrValue: FormAbstract | any, key: any): FormAbstract {
    const control = controlOrValue instanceof FormAbstract ? controlOrValue : new FormControl(controlOrValue);
    control.name = key;
    control.parent = this;
    control.validators.push(...this.validators);
    return control;
  }

  protected setInitialOptions(options?: FormOptions) {
    this.initialOptions_ = options;
    if (options) {
      if (options.schema) {
        this.schema = options.schema;
      }
      if (options.name) {
        this.name = options.name;
      }
      if (options.label) {
        this.label = options.label;
      }
      if (options.placeholder) {
        this.placeholder = options.placeholder;
      }
      if (options.options) {
        this.options = options.options;
      }
      if (options.optionsExtra) {
        this.optionsExtra = options.optionsExtra;
      }
      /*
      // todo
      if (options.required === true) {
        this.forEach_((control: FormAbstract) => {
          control.state_.required = true;
        });
      }
      */
      if (options.disabled === true || typeof options.disabled === 'function') {
        this.forEach_((control: FormAbstract) => {
          control.state_.disabled = true;
        });
      }
      if (options.readonly === true || typeof options.readonly === 'function') {
        this.forEach_((control: FormAbstract) => {
          control.state_.readonly = true;
        });
      }
      if (options.hidden === true || typeof options.hidden === 'function') {
        this.forEach_((control: FormAbstract) => {
          control.state_.hidden = true;
        });
      }
    }
    this.updateState_();
  }

  protected async checkAsyncPropState_(key: string, option?: FormActivator, root?: FormCollection): Promise<boolean> {
    let dirty = false;
    if (typeof option === 'function') {
      let result = option(this.value_, root?.value, this, root);
      // console.log('checkAsyncPropState_', result);
      result = isThenable(result) ? await result : result;
      this.forEach_((control: FormAbstract) => {
        if (control.state_[key] !== result) {
          control.state_[key] = result;
          dirty = true;
        }
      });
    }
    return dirty;
  }

  updateState_() {
    const state = this.state_;
    let invalid = false;
    let disabled = true;
    let hidden = true;
    let readonly = true;
    let dirty = false;
    let touched = true;
    let submitted = true;
    this.forEach_((control: FormAbstract) => {
      invalid = invalid || control.invalid;
      disabled = disabled && control.disabled;
      hidden = hidden && control.hidden;
      readonly = readonly && control.readonly;
      dirty = dirty || control.dirty;
      touched = touched && control.touched;
      submitted = submitted && control.submitted;
    });
    state.invalid = invalid;
    state.disabled = disabled;
    state.hidden = hidden;
    state.readonly = readonly;
    state.dirty = dirty;
    state.touched = touched;
    state.submitted = submitted;
    state.valid = !invalid;
    state.enabled = !disabled;
    state.visible = !hidden;
    state.writeable = !disabled && !readonly;
    state.pristine = !dirty;
    state.untouched = !touched;
    /*
    console.log('FormAbstractCollection', Object.keys(state).filter((key) => state[key]).join(', '));
    */
  }

  async revalidate_(): Promise<void> {
    if (this.parent) {
      return await this.parent.revalidate_();
    }
    await this.validateAndChange_(this);
  }

  protected async validate_(root?: FormCollection) {
    await this.checkAsyncState_(root);
    const validations = this.map_().map(x => x.validateAndChange_(root));
    await Promise.all(validations);
    /*
    this.forEach_(async (control) => {
      await control.validateAndChange_(root);
    });
    */
    this.updateState_();
  }

  reset() {
    this.forEach_((control: FormAbstract) => control.reset());
  }

  patch(value: any) {
    if (value) {
      this.forEach_((control: FormAbstract, key: string) => {
        if (value[key] != null) {
          // !!! keep != loose inequality
          control.patch(value[key]);
        }
      });
    }
  }

  get(key: keyof T): FormAbstract {
    const controls = this.controls as { [key: string]: FormAbstract };
    return controls[key as string];
  }

  set(control: FormAbstract, key: keyof T): void {
    const controls = this.controls as { [key: string]: FormAbstract };
    delete controls[key as string];
    controls[key as string] = this.initControl_(control, key);
  }

  // !!! needed?
  add(control: FormAbstract, key: keyof T): void {
    const controls = this.controls as { [key: string]: FormAbstract };
    controls[key as string] = this.initControl_(control, key);
  }

  remove(control: FormAbstract): void {
    this.forEach_((c: FormAbstract, k: keyof T) => {
      if (c === control) {
        this.removeKey(k);
      }
    });
  }

  /*
  remove(control: FormAbstract): void {
    const key = Object.keys(this.controls_).find((key: keyof T) => (this.controls_[key] === control ? key : null));
    if (key) {
      this.removeKey(key);
    }
  }
  */

  removeKey(key: keyof T): void {
    const exhist: boolean = this.controls[key] !== undefined;
    delete this.controls_[key];
  }

  addValidators(...validators: FormValidator[]) {
    this.forEach_((control: FormAbstract) => control.addValidators(...validators));
  }

  replaceValidators(...validators: FormValidator[]) {
    this.forEach_((control: FormAbstract) => control.replaceValidators(...validators));
  }

  clearValidators() {
    this.forEach_((control: FormAbstract) => control.clearValidators());
  }

  protected forEach_(callback: Function): void {
    const controls = this.controls as { [key: string]: FormAbstract };
    Object.keys(controls).forEach(key => callback(controls[key], key));
  }

  protected reduce_(callback: Function, result: any): any {
    this.forEach_((control: FormAbstract, key: any) => {
      result = callback(result, control, key);
    });
    return result;
  }

  protected all_(key: (keyof FormAbstract), value: any): boolean {
    return this.reduce_((result: boolean, control: FormAbstract) => {
      return result && control[key] === value;
    }, true);
  }

  protected any_(key: (keyof FormAbstract), value: any): boolean {
    return this.reduce_((result: boolean, control: FormAbstract) => {
      return result || control[key] === value;
    }, false);
  }

  protected map_() {
    const controls = this.controls as { [key: string]: FormAbstract };
    return Object.keys(controls).map(key => controls[key]);
  }

  // getter & setter
  get controls() {
    return this.controls_;
  }

  set controls(controls) {
    if (this.controls_ !== controls) {
      this.controls_ = controls;
      this.revalidate_();
    }
  }

  set disabled(disabled: boolean) {
    this.forEach_((control: FormAbstract) => {
      control.disabled = disabled;
    });
  }

  set readonly(readonly: boolean) {
    this.forEach_((control: FormAbstract) => {
      control.readonly = readonly;
    });
  }

  set hidden(hidden: boolean) {
    this.forEach_((control: FormAbstract) => {
      control.hidden = hidden;
    });
  }

  set submitted(submitted: boolean) {
    this.forEach_((control: FormAbstract) => {
      control.submitted = submitted;
    });
  }

  set touched(touched: boolean) {
    this.forEach_((control: FormAbstract) => {
      control.touched = touched;
    });
  }

  get value(): { [key: string]: any } {
    return this.reduce_((result: { [key: string]: any }, control: FormAbstract, key: string) => {
      if (control.enabled) {
        result[key] = control.value;
      }
      return result;
    }, {});
  }

  set value(value: { [key: string]: any }) {
    this.forEach_((control: FormAbstract, key: string) => {
      control.value = value[key];
    });
  }

  get errors(): { [key: string]: any } {
    return this.reduce_((result: { [key: string]: any }, control: FormAbstract) => {
      return Object.assign(result, control.errors);
    }, {});
  }

  set errors(errors) { }
}
