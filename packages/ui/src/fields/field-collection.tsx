
import { FormAbstract, FormArray, FormGroup } from '@websolute/forms';
import { useLabel } from '@websolute/hooks';
import { Divider, Grid } from '../components';
import { FIELDS, FieldType } from './fields';

type FieldCollectionProps = {
  collection: FormGroup | FormArray;
  uid?: number | null | undefined;
};

export function FieldCollection(props: FieldCollectionProps) {
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
      return <FieldCollection collection={control} uid={uid} key={getFieldUID(uid, control.name)} />;
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
        <Grid key={getFieldUID(++uid, props.collection.name)} xs={12}>
          <Divider>{label(props.collection.label)}</Divider>
        </Grid>
      }

      {controls.length > 0 && controls.map(item => {
        const control = item.control;
        if (!control) {
          return;
        }
        if (control instanceof FormGroup || control instanceof FormArray || control.state.hidden) {
          // console.log(control);
          if (control.state.hidden) {
            return;
          }
          return resolveField(item);
        } else {
          return <Grid key={getFieldUID(++uid, item.key)} xs={12} sm={['checkbox', 'accept'].includes(control.schema) ? 12 : 6} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            {resolveField(item)}
          </Grid>;
        }
      })}
    </>
  );
}

function getFieldUID(uid: number, key: string | number = 'none') {
  const fieldUID = `${++uid}-${key}`;
  return fieldUID;
}
