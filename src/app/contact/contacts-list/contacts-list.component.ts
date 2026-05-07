import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact-service/contact.service';
import { Contact } from '../../interfaces/contact.interface';
import { ContactComponent } from '../contact/contact.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [CommonModule, ContactComponent, ContactDetailsComponent],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss',
})
export class ContactsDairyComponent implements OnInit {
  contacts: Contact[] = [];

  selectedContactId!: Number;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts(): void {
    this.contactService.getAllContacts().subscribe({
      next: (response: Contact[]) => {
        this.contacts = response;

        // Default selected contact
        if (this.contacts.length > 0) {
          this.selectedContactId = this.contacts[0].id;
        }

        console.log(this.contacts);
      },

      error: (error) => {
        console.log(error);
      },
    });
  }

 
  onContactSelected(id: number) {
  this.selectedContactId = id;
}
}
