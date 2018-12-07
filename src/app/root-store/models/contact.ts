import { Phone } from './phone';
export interface Contact {
  uuid?: string;
  name?: string;
  email?: string;
  contactNumbers?: Phone[];
}
