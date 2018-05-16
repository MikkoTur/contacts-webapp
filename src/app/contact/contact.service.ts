import {Injectable} from '@angular/core';
import {Contact} from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact(1, 'Sami', 'Luukkanen'));
    this.contacts.push(new Contact(2, 'Pertti', 'Jokunen'));
    this.contacts.push(new Contact(3, 'Seppo', 'Taalasmaa'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }
}
