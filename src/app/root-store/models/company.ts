import { Address } from './address';
import { Phone } from './phone';
import { Contact } from './contact';
export interface Company {
  uuid?: string;
  name?: string;
  address?: Address;
  phone?: Phone;
  members?: Contact[];
}
