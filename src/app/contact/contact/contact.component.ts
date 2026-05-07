import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../interfaces/contact.interface';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @Input() contacts: Contact[] = [];

  @Input() selectedContact!: Contact;

  @Output() contactSelected = new EventEmitter<number>();

  selectContact(contact: Contact) {
    this.contactSelected.emit(contact.id);
  }
}
