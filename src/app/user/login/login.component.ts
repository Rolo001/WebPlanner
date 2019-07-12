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
      this.service.LogIn(form.value).subscribe(
      (res:any)=>{
        console.log(res);
        if(res)
        {
          this.router.navigateByUrl('dashboard');
          localStorage.setItem('userOnline', res.value)
          console.log('setItem: OK');
        }
        else
        {
          this.router.navigateByUrl('user/register');
        }
      }
    );
  }
}
