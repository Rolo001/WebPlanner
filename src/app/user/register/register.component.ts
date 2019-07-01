import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formModel = {
    Email:'',
    FirstName:'',
    LastName:'',
    Password:'',
    ConfirmPassword:''
  }
  constructor() { }

  ngOnInit() {
  }

  onRegister(form:NgForm) {
    console.log(form.value);
  }

}
