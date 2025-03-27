import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from 'ViewModels/IContact';
import { BookServiceService } from 'Services/book-service.service';

@Component({
  selector: 'app-Edit',
  templateUrl: './Edit.component.html',
  styleUrls: ['./Edit.component.css']
})
export class EditComponent implements OnInit {
  MyForm!:FormGroup;
  content!: IContact;
  constructor(
    private activeRoute: ActivatedRoute,
    private location: Location,
    private router:Router,
    private fb:FormBuilder,
    private bookServiceService: BookServiceService
  ) {}

  get name() {
    return this.MyForm.get('Name');
}

get email() {
    return this.MyForm.get('Email');
}

get phoneNumber() {
    return this.MyForm.get('PhoneNumber');
}

onSubmit() {
    if (this.MyForm.valid) {
        console.log('Form submitted:', this.MyForm.value);
    }
  }

  send(data:IContact)
  {
    console.log(data);
    this.bookServiceService.editContact(this.content.Id,data).subscribe(
      (res)=>
      {
        this.bookServiceService.getContacts().subscribe(
          (res)=>
          {
            this.router.navigateByUrl("/Home");
          }
        );
      },
      (err)=>
      {
        console.log(err)
      }
    );

  }

  GoBack() {
    this.location.back();
  }


  ngOnInit() {
    this.MyForm=this.fb.group({
      Name:new FormControl(''),
      Email:new FormControl(''),
      PhoneNumber:new FormControl(''),
    })
      const id= this.activeRoute.snapshot.params['pid'];
      this.bookServiceService.getContactById(id).subscribe(
        (response) => {

          this.content = response;
          console.log(this.content);
        this.MyForm=this.fb.group({
            Name:[`${this.content.Name}`,[Validators.required]],
            Email:[`${this.content.Email}`,[Validators.required, Validators.email]],
            PhoneNumber:[`${this.content.PhoneNumber}`,[Validators.required,Validators.pattern('^[0-9]{11}$')]],
          })
      }
  );
    }
}
