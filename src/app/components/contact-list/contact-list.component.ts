import {Component} from '@angular/core';
import {ContactStateService} from 'src/app/services/contact-state.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contacts$ = this.contactStateService.contacts$;

  constructor(
    private contactStateService: ContactStateService,
    private router: Router
  ) { }

  addContact() {
    this.router.navigate(["edit"])
  }
}
