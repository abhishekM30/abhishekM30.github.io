import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { LoginService } from './../services/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = null;
  password = null;
  isUserValid;
  error = false;
  message;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    console.log("inside login component" + this.username);

    // checking if username and password is not empty
    if ((this.username == null || this.password == null || this.username == undefined || this.password == undefined)) {

      this.error = true;
      this.message = "Username or Password Field can not be Empty";

    }
    else {
      //calling the service to authinticate User
      this.loginService.authinticateUser(this.username, this.password).subscribe(data =>

      { this.isUserValid = data }

      );


      if (this.isUserValid == true) {
        this.router.navigate(['/Register']);

      }
      else {
        this.error = true;
        this.message = "wrong Credentials"
      }


    }

    console.log("service returns : " + this.isUserValid);


  }

}
