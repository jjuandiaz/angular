import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login_auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  isError: boolean = false;
  error: String;

  constructor( private router: Router, private loginService:LoginService ) {}

  ngOnInit(): void {
  }
  login(form:NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    try {
      
    this.loginService.login(email, password) .subscribe(
      (response) => {                          
        this.loginService.token = response.data.token;
        sessionStorage.setItem("token", response.data.token); 
        this.isError = false;
        this.router.navigate(['destinatario'])
        },
        (error) => {                             
          this.isError = true;
          this.error = error;
         // throw error;
        }
      )
    } catch (error) {
      console.log("catch: " + error);              
          this.isError = true;
          this.error = "Lo sentimos ha ocurrido un error, intenta más tarde";
    }
  }

}
