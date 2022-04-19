import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private loginService:LoginService, private route:Router) { }

  ngOnInit(): void {
  }
  loginFormGroup = this.formBuilder.group({
    email:[''],
    password:['']
  })
  login() {
    console.log(this.loginFormGroup.value.email);
    const authenticated = this.loginService.login(this.loginFormGroup.value.email, this.loginFormGroup.value.password);
    if (authenticated) {
      this.route.navigateByUrl('/dashboard');
    }
  }
}
