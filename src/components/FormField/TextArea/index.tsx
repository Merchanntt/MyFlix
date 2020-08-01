import React, { ChangeEvent } from 'react';

import { WrapperFormField, Label, LabelText, TextArea } from './styles';

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange(event: ChangeEvent<HTMLTextAreaElement>): void;
}

const FormFieldTextArea: React.FC<InputProps> = ({
  label,
  name,
  onChange,
  value = '',
}) => {
  const hasContent = Boolean(value.length);

  return (
    <WrapperFormField>
      <Label htmlFor="name">
        <TextArea
          name={name}
          value={value}
          onChange={onChange}
          hasText={hasContent}
        />
        <LabelText>{label}:</LabelText>
      </Label>
    </WrapperFormField>
  );
};

export default FormFieldTextArea;
