import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IContact } from 'ViewModels/IContact';
import { BookServiceService } from 'Services/book-service.service';

@Component({
  selector: 'app-Add',
  templateUrl: './Add.component.html',
  styleUrls: ['./Add.component.css']
})
export class AddComponent implements OnInit {

  MyForm!:FormGroup;
  constructor(
    private fb:FormBuilder,
    private bookServiceService: BookServiceService,
    private router:Router,
    private location:Location) { }

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
    this.bookServiceService.addContact(data).subscribe(
      (res)=>
      {
        this.bookServiceService.getContacts().subscribe(
          (res)=>
          {
            this.router.navigateByUrl("/Home");
          }
        );
      },
    );

  }
  GoBack()
  {
   this.location.back();
  }


  ngOnInit() {
    this.MyForm=this.fb.group({
      Name:new FormControl('',[Validators.required]),
      Email:new FormControl('',[Validators.required, Validators.email]),
      PhoneNumber:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{11}$')]),
    })
  }

}
