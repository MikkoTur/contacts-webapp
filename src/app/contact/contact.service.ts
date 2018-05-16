import {Injectable} from '@angular/core';
import {Contact} from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact('Sami', 'Luukkanen'));
    this.contacts.push(new Contact('Pertti', 'Jokunen'));
    this.contacts.push(new Contact('Seppo', 'Taalasmaa'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }
}
