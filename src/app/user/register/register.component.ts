import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/Services/register.service';
import { Router } from '@angular/router';

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
  constructor(private service:RegisterService, private router:Router) { }

  ngOnInit() {
  }

  onRegister(form:NgForm) {
    console.log(form.value);
    this.service.Register(form.value).subscribe(
      (res:any) => {
        if(res!=null) {
          this.router.navigateByUrl('user/Login');
          console.log('setItem: Registered');
        }
        else {
          console.log('Registration Failed, form is empty');
        }
      }
    ) 
  }
}

