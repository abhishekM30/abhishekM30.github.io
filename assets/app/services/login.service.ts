import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  authinticateUser(a, b): Observable<any> {
    console.log("inside user validation function of login Service" + b);

    if (a == "Abhishek" && b == "123456") {
      return of(true);
    }
    else {
      return of(false);
    }



    //return this.http.post(this.url,httpOptions);


  }
}
