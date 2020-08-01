import React, { ChangeEvent } from 'react';

import { WrapperFormField, Label, LabelText, Input } from './styles';

interface InputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
  suggestions?: string[];
  suggestionsKey?: string;
}

const FormField: React.FC<InputProps> = ({
  label,
  name,
  onChange,
  type,
  value = '',
  suggestions,
  suggestionsKey,
}) => {
  const hasContent = Boolean(value.length);

  return (
    <WrapperFormField>
      <Label htmlFor="name">
        <Input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          hasText={hasContent}
          suggestions={suggestions}
          suggestionsKey={suggestionsKey}
        />
        <LabelText>{label}:</LabelText>
        {suggestions && (
          <datalist id={suggestionsKey}>
            {suggestions.map(items => (
              <option value={items} key={items}>
                {items}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </WrapperFormField>
  );
};

export default FormField;
