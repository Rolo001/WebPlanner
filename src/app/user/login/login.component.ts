import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, NgForm } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';

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
  constructor(private service:LoginService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm) {
    console.log("OnSubmit has been excuted.");
    this.service.LogIn(form.value).subscribe(
      (res:any)=>{
        console.log(res);
        localStorage.setItem('userOnline', res.value)
        console.log('setItem: OK');
        this.router.navigateByUrl('dashboard');
      }
    );
    }
}
