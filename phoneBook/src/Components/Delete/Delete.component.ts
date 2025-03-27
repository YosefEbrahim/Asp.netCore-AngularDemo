import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from 'ViewModels/IContact';
import { BookServiceService } from 'Services/book-service.service';

@Component({
  selector: 'app-Delete',
  templateUrl: './Delete.component.html',
  styleUrls: ['./Delete.component.css'],
})
export class DeleteComponent implements OnInit {
   content!: IContact;
  constructor(
    private activeRoute: ActivatedRoute,
    private location: Location,
    private router:Router,
    private bookServiceService: BookServiceService
  ) {}
  DeleteAction(Id : number)
  {
    this.bookServiceService.removeContact(Id).subscribe(
      (res)=>{
        this.bookServiceService.getContacts().subscribe(
          (res)=>
          {
            this.router.navigateByUrl("/Home");
          }
        );
      }
    )
  }
  GoBack() {
    this.location.back();
  }


  ngOnInit() {
    const id= this.activeRoute.snapshot.params['pid'];
      this.bookServiceService.getContactById(id).subscribe(
        (response) => {

          this.content = response;

      },
        (error) => {
          console.log(error);
        }
      );
  }
}
