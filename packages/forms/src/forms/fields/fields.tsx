import { IFields } from '../types';
import FieldAccept from './field-accept';
import FieldAutocomplete from './field-autocomplete';
import FieldCheckbox from './field-checkbox';
import FieldSelect from './field-select';
import FieldText from './field-text';

/*
  * Here we define the types of form fields.
*/
export type FieldType = 'text' | 'select' | 'autocomplete' | 'checkbox' | 'radio' | 'accept';

/*
  * Here we define the types of form fields.
*/
export const FIELDS: IFields = {
  text: (control, uid) => <FieldText control={control} uid={uid} key={uid} />,
  select: (control, uid) => <FieldSelect control={control} uid={uid} key={uid} />,
  autocomplete: (control, uid) => <FieldAutocomplete control={control} uid={uid} key={uid} />,
  checkbox: (control, uid) => <FieldCheckbox control={control} uid={uid} key={uid} />,
  radio: (control, uid) => <FieldCheckbox control={control} uid={uid} key={uid} />,
  accept: (control, uid) => <FieldAccept control={control} uid={uid} key={uid} />,
};
