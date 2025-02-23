export interface FormHandlerTypes {
  mode: string;
  onSubmit: (values: any) => void;
  loading?: boolean;
}

export interface InputControlledTypes {
  label?: string;
  name: string;
  required?: boolean;
  autofocus?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  type?: string;
  icon?: any;
  maxLength?: number;
  loading?: boolean;
  handleClick?: any;
  error?: any;
  errorText?: any;
}
export interface FileInputControlledTypes {
  label?: string;
  name: string;
  required?: boolean;
  autofocus?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  icon?: any;
  maxLength?: number;
  loading?: boolean;
  handleClick?: any;
  error?: any;
  errorText?: any;
}
export interface PinInputControlledTypes {
  label?: string;
  name: string;
  required?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  icon?: any;
  maxLength?: number;
  loading?: boolean;
  handleClick?: any;
  error?: any;
  errorText?: any;
}

export interface TextAreaControlledTypes {
  label?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  description?: string;
  icon?: any;
  loading?: boolean;
  handleClick?: any;
  autosize?: boolean;
  minRows?: number;
  maxRows?: number;
  error?: any;
  errorText?: any;
}

export interface TextEditorControlledTypes {
  label?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  loading?: boolean;
  value: string;
  onChange: any;
  error?: any;
  errorText?: any;
}

export interface PasswordControlledTypes {
  label?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  icon?: any;
  maxLength?: number;
  loading?: boolean;
  error?: any;
  errorText?: any;
}

export interface InputNumberControlledTypes {
  label?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  icon?: any;
  maxLength?: number;
  hideControls?: boolean;
  loading?: boolean;
  error?: any;
  errorText?: any;
}

export interface SelectControlledTypes {
  label?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  options: { label: string; value: string; img?: any }[];
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  error?: any;
  errorText?: any;
}
export interface MultiSelectControlledTypes {
  label?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  options: { label: string; value: string; img?: any }[];
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  error?: any;
  errorText?: any;
}

export interface DateInputControlledTypes {
  label?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  loading?: boolean;
  icon?: any;
  error?: any;
  errorText?: any;
  minDate?: any;
  maxDate?: any;
}
export interface TimeInputControlledTypes {
  label?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  loading?: boolean;
  icon?: any;
  error?: any;
  errorText?: any;
}
export interface DateTimePickerControlledTypes {
  label?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  loading?: boolean;
  icon?: any;
  error?: any;
  errorText?: any;
  minDate?: any;
  maxDate?: any;
}

export interface RadioGroupControlledTypes {
  label?: string;
  name: string;
  required?: boolean;
  loading?: boolean;
  options?: { label: string | any; value: string }[];
  error?: any;
  errorText?: any;
  value?: any;
  onChange?: any;
}

export interface CheckBoxGroupControlledTypes {
  label?: string;
  name: string;
  required?: boolean;
  loading?: boolean;
  options?: { label: string | any; value: string }[];
  error?: any;
  errorText?: any;
  value?: any;
  onChange?: any;
}
