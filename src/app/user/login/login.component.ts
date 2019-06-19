import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formModel = {
  UserName: '',
  Password: ''
}
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

}
