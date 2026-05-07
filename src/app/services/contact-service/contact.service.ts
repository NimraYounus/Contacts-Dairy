import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from '../../interfaces/contact.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private baseUrl = 'https://69fc5c8afce564e25917e960.mockapi.io/contact';

  constructor(private http: HttpClient) {}

  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl);
  }

  getContactById(id: Number) {
    return this.http.get<Contact>(`${this.baseUrl}/${id}`);
  }
}
