import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  constructor() { }

  ngOnInit() {

  }

  registerMe(form) {

    this.registrationForm = new FormGroup(
      {
        usernname : new FormControl(),
        password : new FormControl(),
        schoolName:new FormControl(),
        schoolAddress : new FormControl(),
        city : new FormControl(),
        pinCode : new FormControl()
      }
    );
    console.log("inside register me ");
  }

}
