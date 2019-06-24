import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  
  LogIn(formData)
  {
    // this is how you communicate with the gates within your API. You may return HTTP responses to handle errors and requests.
    console.log(formData);
    return this.http.post("https://localhost:44370/api/user/user/LoginTest", formData);
  }
}