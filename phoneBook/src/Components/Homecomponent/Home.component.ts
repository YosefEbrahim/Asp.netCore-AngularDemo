import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'Services/book-service.service';
import { IContact } from 'ViewModels/IContact';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})

export class HomeComponent implements OnInit {
  title = 'phoneBook';
  contacts!: IContact[];
  //searchTerm: string = '';
  //filteredContacts: any;

  constructor(private bookServiceService: BookServiceService) {}

  ngOnInit() {
    this.bookServiceService.getContacts().subscribe((data: IContact[]) => {
      this.contacts = data;
    });
  }


  search(searchTerm:string) {
    if (searchTerm) {
      this.bookServiceService.searchContacts(searchTerm).subscribe((data: IContact[]) => {
        this.contacts = data;
      });
    } else {
        this.bookServiceService.getContacts().subscribe((data: IContact[]) => {
        this.contacts = data;
      });
    }

  }


}
