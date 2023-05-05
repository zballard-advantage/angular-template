import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Contact } from "../models/contact.model";

@Injectable({
  providedIn: 'root'
})
export class ContactStateService {
  initialContacts: Contact[] = [
    {
      id: 1,
      name: "Faye K. Pearson",
      phoneNumber: "(123) 456-7890"
    },
    {
      id: 2,
      name: "Amy Duperson",
      phoneNumber: "(234) 567-8901"
    },
    {
      id: 3,
      name: "Nat Real",
      phoneNumber: "(345) 678-9012"
    }
  ];

  private _contacts = new BehaviorSubject<Contact[]>(this.initialContacts);
  contacts$ = this._contacts.asObservable();

  constructor() { }

  saveContact(contact: Contact) {
    this.contacts$.pipe(
      take(1)
    ).subscribe(contacts => this._contacts.next([...contacts, contact]))
  }
}
