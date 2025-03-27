import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContact } from '../ViewModels/IContact';
import { Observable } from 'rxjs';
import { IContactDTO } from 'ViewModels/IContactDTO';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private apiUrl = 'https://localhost:7236/api';
  constructor(private http: HttpClient) {}

  getContacts():Observable<IContact[]> {
    return this.http.get<IContact[]>(this.apiUrl);
  }

  addContact(contact: IContactDTO) {
    return this.http.post(this.apiUrl, contact);
  }

  removeContact(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getContactById(id: number) {
    return this.http.get<IContact>(`${this.apiUrl}/${id}`);
  }

  editContact(id: number,contact: IContact) {
    return this.http.put(`${this.apiUrl}/${id}`,contact);
  }

  searchContacts(searchTerm: string) {
    return this.http.get<IContact[]>(`${this.apiUrl}/search?searchTerm=${searchTerm}`);
  }
}
