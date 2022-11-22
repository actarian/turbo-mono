import { FormControl } from '@websolute/forms';
import { FieldAccept } from './field-accept';
import { FieldAutocomplete } from './field-autocomplete';
import { FieldCard } from './field-card';
import { FieldCheckbox } from './field-checkbox';
import { FieldPassword } from './field-password';
import { FieldSelect } from './field-select';
import { FieldText } from './field-text';

/*
  * Here we define the types of form fields.
*/
export type FieldType = 'text' | 'password' | 'select' | 'autocomplete' | 'checkbox' | 'radio' | 'accept' | 'card';

/*
  * Here we define the types of form fields.
*/
export const FIELDS: IFields = {
  text: (control, uid) => <FieldText control={control} uid={uid} key={uid} />,
  password: (control, uid) => <FieldPassword control={control} uid={uid} key={uid} />,
  select: (control, uid) => <FieldSelect control={control} uid={uid} key={uid} />,
  autocomplete: (control, uid) => <FieldAutocomplete control={control} uid={uid} key={uid} />,
  checkbox: (control, uid) => <FieldCheckbox control={control} uid={uid} key={uid} />,
  radio: (control, uid) => <FieldCheckbox control={control} uid={uid} key={uid} />,
  accept: (control, uid) => <FieldAccept control={control} uid={uid} key={uid} />,
  card: (control, uid) => <FieldCard control={control} uid={uid} key={uid} />,
};

export type IFields = {
  [key in FieldType]: (control: FormControl, uid?: number) => JSX.Element;
};
