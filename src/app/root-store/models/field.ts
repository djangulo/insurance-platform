import { Time } from "@angular/common";

export enum FieldTypes {
  Text = 'Text',
  LongText = 'Long text',
  Number = 'Number',
  NumberRange = 'Number range',
  YesNo = 'Yes-no',
  Choice = 'Choice',
  MultipleChoice = 'Multiple choice',
  Date = 'Date',
  Time = 'Time',
  TimeSpan = 'Time span',
  File = 'File'
}

interface BaseField {
  uuid?: string;
  name: string;
  slug: string;
  dataType: FieldTypes;
  helpText?: string;
  validators?: any[];
  displayOptions?: {};
}


export interface ChoiceField extends BaseField {
  value?: number; // Represents the index
  choices: string[];
  default: number; // Index of default choice  
}

export interface MultipleChoiceField extends BaseField {
  value?: string;
  choices: string[];
}

export interface DateField extends BaseField {
  value?: Date;
}

export interface TimeField extends BaseField {
  value?: Time;
}

export interface TimeSpanField extends BaseField {
  from?: Date;
  to?: Date; 
}

/**
 * File or document field.
 */
export interface FileField extends BaseField {
  value?: File;
}

export interface NumberField extends BaseField {
  value?: number;
  decimalSpaces?: number;
}

export interface NumberRangeField extends BaseField {
  from?: number;
  to?: number;
}

export interface TextField extends BaseField {
  value?: string;
}

export interface LongTextField extends BaseField {
  value?: string;
}

export interface YesNoField extends BaseField {
  value?: boolean;
}
