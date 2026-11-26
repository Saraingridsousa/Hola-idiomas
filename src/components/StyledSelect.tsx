import { useId } from 'react';
import * as Select from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

type Choice<T extends string> = { value: T; label: string; tag?: string; accent?: string };
type Props<T extends string> = {
  label: string;
  value: T;
  options: readonly Choice<T>[];
  onChange: (value: T) => void;
};

export function StyledSelect<T extends string>({ label, value, options, onChange }: Props<T>) {
  const id = useId();
  const selected = options.find(option => option.value === value);
  const marker = (option: Choice<T>) => option.tag
    ? <span className="hola-select-tag" style={{ background: option.accent }} aria-hidden="true">{option.tag}</span>
    : null;

  return (
    <div className="hola-select-field">
      <label id={id + '-label'} htmlFor={id}>{label}</label>
      <Select.Root value={value} onValueChange={next => {
        const option = options.find(item => item.value === next);
        if (option) onChange(option.value);
      }}>
        <Select.Trigger id={id} className="hola-select-trigger" aria-labelledby={id + '-label'}>
          <span className="hola-select-value">
            {selected && marker(selected)}
            <Select.Value placeholder="Selecione uma opção" />
          </span>
          <Select.Icon asChild><ChevronDown className="hola-select-chevron" size={18} aria-hidden="true" /></Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="hola-select-content" position="popper" sideOffset={7} collisionPadding={12}>
            <Select.ScrollUpButton className="hola-select-scroll"><ChevronUp size={16} /></Select.ScrollUpButton>
            <Select.Viewport className="hola-select-viewport">
              {options.map(option => (
                <Select.Item key={option.value} value={option.value} className="hola-select-option">
                  {marker(option)}
                  <Select.ItemText>{option.label}</Select.ItemText>
                  <Select.ItemIndicator className="hola-select-check"><Check size={17} strokeWidth={2.8} aria-hidden="true" /></Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.ScrollDownButton className="hola-select-scroll"><ChevronDown size={16} /></Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}

export function textChoices<T extends string>(values: readonly T[]): Choice<T>[] {
  return values.map(value => ({ value, label: value }));
}
