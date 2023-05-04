import { Component } from '@angular/core';
import { ContactStateService } from 'src/app/services/contact-state.service';
import {Contact} from "../models/contact.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent {
  contact: Contact = {
    id: 0,
    name: "",
    phoneNumber: ""
  };

  isEditing = false;

  constructor(
    private contactStateService: ContactStateService,
    private router: Router
  ) {

  }

  saveContact() {
    this.contactStateService.saveContact(this.contact);
    this.router.navigate(["contacts"])
  }
}
