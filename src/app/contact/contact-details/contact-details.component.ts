import { Component, Input } from '@angular/core';
import { Contact } from '../../interfaces/contact.interface';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact-service/contact.service';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss',
})
export class ContactDetailsComponent {
  @Input() contactId!: Number;

  contact!: Contact;

  constructor(private contactService: ContactService) {}

  ngOnChanges() {
    if (this.contactId) {
      this.loadContact(this.contactId);
    }
  }

  loadContact(id: Number) {
    this.contactService.getContactById(id).subscribe((res) => {
      this.contact = res;
    });
  }
}
