import { getClassNames, IOption } from '@websolute/core';
import {
  EmailValidator, FormAsyncValidator, FormGroup, RequiredIfValidator, RequiredTrueValidator,
  RequiredValidator, useFormBuilder, ValidationError
} from '@websolute/forms';
import { useLabel } from '@websolute/hooks';
import { Button, FieldCollection, Flex, FormTester, Grid } from '@websolute/ui';

export default function ContactForm({ data, onSubmit }: { data: IContactForm, onSubmit: (value: any) => void }) {
  const label = useLabel();

  const required = RequiredValidator();
  const requiredTrue = RequiredTrueValidator();
  const email = EmailValidator();

  const exhist: FormAsyncValidator = async (value: any, rootValue: any) => {
    return new Promise<ValidationError | null>((resolve, reject) => {
      setTimeout(() => {
        resolve(value === 'aa@aa.aa' ? { exhist: true } : null);
      }, 500);
    });
  };

  // const exhist: FormAsyncValidator = async (value: any, rootValue: any) => Promise.resolve(value === 'aa@aa.aa' ? { exhist: true } : null);

  const requiredIfPrintedCopy = RequiredIfValidator((value, rootValue) => rootValue?.printedCopy === true);
  const hiddenIfNotPrintedCopy = (value: any, rootValue: any) => !(rootValue?.printedCopy === true);
  const requiredIfItaly = RequiredIfValidator((value, rootValue) => rootValue?.shippingAddress?.country?.id === 'it');

  /*
  const hiddenIfNotPrintedCopy = async (value: any, rootValue: any) => new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      resolve(!(rootValue?.printedCopy === true));
    }, 500);
  });
  */

  // const hiddenIfNotPrintedCopy = async (value: any, rootValue: any) => Promise.resolve(!(rootValue?.printedCopy === true));

  const [form, setValue, setTouched, reset, group] = useFormBuilder<any, FormGroup>({

    firstName: { schema: 'text', label: 'field.firstName', validators: required },
    lastName: { schema: 'text', label: 'field.lastName', validators: required },
    email: { schema: 'text', label: 'field.email', validators: [required, email, exhist] },
    telephone: { schema: 'text', label: 'field.telephone', validators: required },
    occupation: { schema: 'select', label: 'field.occupation', options: data.occupations, validators: required },
    //
    magazine: { schema: 'select', label: 'field.magazine', options: data.magazines, validators: required },
    //
    printedCopy: { schema: 'checkbox', label: 'field.printedCopy' },
    //
    shippingAddress: {
      schema: 'group', label: 'field.shippingAddress', children: {
        country: { schema: 'autocomplete', label: 'field.country', options: data.countries, validators: requiredIfPrintedCopy },
        region: { schema: 'autocomplete', label: 'field.region', options: data.regions, validators: requiredIfItaly },
        province: { schema: 'autocomplete', label: 'field.province', options: data.provinces, validators: requiredIfItaly },
        address: { schema: 'text', label: 'field.address', validators: requiredIfPrintedCopy },
        streetNumber: { schema: 'text', label: 'field.streetNumber', validators: requiredIfPrintedCopy },
        zipCode: { schema: 'text', label: 'field.zipCode', validators: requiredIfPrintedCopy },
        city: { schema: 'text', label: 'field.city', validators: requiredIfPrintedCopy },
        phoneNumber: { schema: 'text', label: 'field.phoneNumber', validators: requiredIfPrintedCopy },
      },
      disabled: hiddenIfNotPrintedCopy,
      hidden: hiddenIfNotPrintedCopy,
    },
    //
    privacy: { schema: 'checkbox', label: 'field.privacy', validators: requiredTrue },
    newsletter: { schema: 'accept', label: 'field.newsletter', validators: required },
    commercial: { schema: 'accept', label: 'field.commercial', validators: required },
    promotion: { schema: 'accept', label: 'field.promotion', validators: required },
    //
    checkField: { schema: 'text', hidden: true }, // check hidden field for antiforgery

  });

  const onTest = () => {
    setValue({
      magazine: data.magazines[0],
      firstName: 'John',
      lastName: 'Appleseed',
      email: 'jhon.appleseed@gmail.com',
      telephone: '+39 123456789',
      occupation: data.occupations[0],
      printedCopy: false,
      privacy: true,
      newsletter: false,
      commercial: false,
      promotion: false,
    });
  };

  const onReset = () => {
    console.log('ContactForm.onReset');
    reset();
  };

  const onValidate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.flags.valid) {
      // form.value
      console.log('ContactForm.onSubmit.valid', form.value);
      onSubmit(form.value);
    } else {
      console.log('ContactForm.onSubmit.invalid');
      setTouched();
    }
  };

  const classNames = getClassNames('form', form.flags);

  return (
    <form className={classNames} onSubmit={onValidate}>
      <Grid.Row rowGap="1rem">
        <FieldCollection collection={group} />
      </Grid.Row>
      <Flex.Row justifyContent="center">
        <Button variant="secondary" onClick={onReset}>{label('form.reset')}</Button>
        <Button variant="primary" type="submit">{label('form.submit')}</Button>
      </Flex.Row>
      <FormTester form={form} onTest={onTest} onReset={onReset}></FormTester>
    </form>
  );
}

export type IContactForm = {
  countries: IOption[];
  magazines: IOption[];
  occupations: IOption[];
  provinces: IOption[];
  regions: IOption[];
};
