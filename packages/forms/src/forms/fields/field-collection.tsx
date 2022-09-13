
import { useLabel } from '@websolute/hooks';
import { Divider, Grid } from '@websolute/ui';
import { FormAbstract } from '../form-abstract';
import { FormArray } from '../form-array';
import { FormGroup } from '../form-group';
import { FIELDS, FieldType } from './fields';

type FieldCollectionProps = {
  collection: FormGroup | FormArray;
  uid?: number | null | undefined;
}

export default function FieldCollection(props: FieldCollectionProps) {
  const label = useLabel();

  let uid = props.uid || 0;

  const controls = (props.collection instanceof FormGroup) ?
    Object.keys(props.collection.controls).map(key => {
      return { key, control: (props.collection as FormGroup).controls[key] };
    }) :
    props.collection.controls.map((control, i) => {
      return { key: i, control };
    });

  function resolveField(item: { control: FormAbstract, key: string | number }) {
    const { control, key } = item;
    ++uid;
    if (control instanceof FormGroup || control instanceof FormArray) {
      return <FieldCollection collection={control} uid={uid} key={uid} />
    } else {
      if (control.schema in FIELDS) {
        return FIELDS[control.schema as FieldType](control, uid);
      } else {
        return FIELDS.text(control, uid);
      }
    }
  }

  return (
    <>
      {props.collection.label &&
        <Grid key={++uid} xs={12}>
          <Divider>{label(props.collection.label)}</Divider>
        </Grid>
      }

      {controls.length && controls.map(item => {
        const control = item.control;
        if (!control) {
          return;
        }
        if (control instanceof FormGroup || control instanceof FormArray || control.state.hidden) {
          // console.log(control);
          if (!control.state.hidden) {
            return resolveField(item);
          }
        } else {
          return <Grid key={++uid} xs={12} sm={['checkbox', 'accept'].includes(control.schema) ? 12 : 6} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            {resolveField(item)}
          </Grid>
        }
      })}
    </>
  );
}
