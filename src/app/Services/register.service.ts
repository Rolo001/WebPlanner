import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  Register(formData) {
    // this is how you communicate with the gates within your API. You may return HTTP responses to handle errors and requests.
    console.log(formData);
    return this.http.post("https://localhost:44370/api/user/Signup", formData);
  }
}
