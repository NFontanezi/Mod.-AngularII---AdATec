import { Address } from "./address.models";
import { Contact } from "./contact.models";

export interface User {
  id: string;
  name: string;
  profession: string;
  birthDate: string;
  documentNumber: string;
  address: Address;
  contact: Contact;
}
