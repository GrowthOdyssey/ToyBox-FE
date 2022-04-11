import { VFC, memo, ReactElement } from 'react';
import {
  FormInputPropsType,
  TextInputType,
  TextAreaType,
  RadioGroupType,
  CheckBoxType,
  SelectBoxType,
  OtherItemType,
} from 'types/form/index';
import { CheckBox } from './CheckBox';
import { RadioGroup } from './RadioGroup';
import { SelectBox } from './SelectBox';
import { TextArea } from './TextArea';
import { TextInput } from './TextInput';

export const FormInput: VFC<FormInputPropsType> = memo((props) => {
  const { type, element } = props;

  let component: ReactElement = <></>;

  switch (type) {
    case 'text':
      const textInputElement = element as TextInputType;
      component = (
        <TextInput
          name={textInputElement.name}
          placeholder={textInputElement.placeholder}
          size={textInputElement.size}
        />
      );
      break;
    case 'textarea':
      const textAreaElement = element as TextAreaType;
      component = (
        <TextArea name={textAreaElement.name} placeholder={textAreaElement.placeholder} rows={textAreaElement.rows} />
      );
      break;
    case 'radio':
      const radioGroupElement = element as RadioGroupType;
      component = <RadioGroup name={radioGroupElement.name} values={radioGroupElement.values} />;
      break;
    case 'checkbox':
      const checkBoxElement = element as CheckBoxType;
      component = <CheckBox name={checkBoxElement.name} value={checkBoxElement.value} />;
      break;
    case 'select':
      const selectBoxElement = element as SelectBoxType;
      component = (
        <SelectBox name={selectBoxElement.name} values={selectBoxElement.values} hdg={selectBoxElement.hdg} />
      );
      break;
    case 'other':
      const otherElement = element as OtherItemType;
      component = otherElement.element;
      break;

    default: {
      throw new Error('Unexpected FormItem Type');
    }
  }

  return component;
});
