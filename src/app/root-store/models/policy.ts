import {
  ChoiceField,
  DateField,
  FileField,
  LongTextField,
  MultipleChoiceField,
  NumberField,
  NumberRangeField,
  TextField,
  TimeField,
  TimeSpanField,
  YesNoField,
}  from './field';

export interface Policy {
  uuid?: string;
  organization?: string;
  name?: string;
  slug?: string;
  description?: string;
  premium?: number;
  deductible?: number;
  fields?: (ChoiceField
    |DateField
    |FileField
    |LongTextField
    |MultipleChoiceField
    |NumberField
    |NumberRangeField
    |TextField
    |TimeField
    |TimeSpanField
    |YesNoField)[];
}
