import { IEquatable, IOption } from '@websolute/core';
import { FormAbstract } from './form-abstract';
import { FormAbstractCollection } from './form-abstract-collection';
import { FormArray } from './form-array';
import { FormControl } from './form-control';
import { FormGroup } from './form-group';

export type IControlParam = { uid: number, control: FormControl };

export type IFormOption = { id: IEquatable, name: string };

export type FormOptions = {
  schema?: ControlType;
  name?: string,
  label?: string,
  value?: string;
  placeholder?: string,
  required?: FormActivator,
  hidden?: FormActivator,
  disabled?: FormActivator,
  readonly?: FormActivator,
  options?: IOption[];
  optionsExtra?: { asEquatable: boolean };
};

export type ValidationError = {
  [key: string]: any
}

export type FormControls = { [key: string]: FormAbstract } | FormAbstract[];
export type FormCollection = FormAbstractCollection<FormControls>;
export type FormActivator = boolean | ((value: any, rootValue: any, control?: FormAbstract, root?: FormCollection) => boolean | Promise<boolean>);
export type FormValidator = (value: any, rootValue: any, control?: FormAbstract, root?: FormCollection) => null | ValidationError;
export type FormAsyncValidator = (value: any, rootValue: any, control?: FormAbstract, root?: FormCollection) => Promise<null | ValidationError>;

export type FormFlags = { [key: string]: boolean };
export type FormErrors = { [key: string]: any };
export type FormValidationError = { key: string, value: any };
export type FormValidationErrors = FormValidationError[];

export type FormState<T> = {
  value: T | null,
  flags: FormFlags,
  errors: FormValidationErrors,
}

export type ControlType = 'group' | 'array' | string;

export type IFormBuilderControlSchema = {
  schema: ControlType;
  name?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  required?: FormActivator;
  hidden?: FormActivator,
  disabled?: FormActivator,
  readonly?: FormActivator,
  options?: IOption[];
  optionsExtra?: { asEquatable: boolean };
  validators?: FormValidator | FormValidator[];
  children?: IFormBuilderSchema;
}

export type IFormBuilderGroupSchema = { [key: string]: IFormBuilderControlSchema };
export type IFormBuilderArraySchema = IFormBuilderControlSchema[];
export type IFormBuilderGroupValues = { [key: string]: FormGroup | FormArray | FormControl };
export type IFormBuilderSchema = IFormBuilderGroupSchema | IFormBuilderArraySchema;

export type StateValue = StateValue[] | { [key: string]: StateValue } | number | string | boolean | null | undefined;
