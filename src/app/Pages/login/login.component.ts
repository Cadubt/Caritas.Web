import { Component, OnInit, AfterViewInit } from '@angular/core';

import { AuthService } from 'src/app/Core/auth.service';
// import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { stringify } from 'querystring';

const API_URL = environment.BASE_URL_API;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm!: FormGroup;
  hide = true;
  showMenu = false;

  constructor(
    private AuthService: AuthService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
  ) { }


  ngOnInit(): void {
    this.AuthService.hideMenu();
    this.AuthService.isMenuShowing = false;
    this.createForm();
  }

  ngAfterViewInit() {
    this.AuthService.hideMenu();
    this.AuthService.isMenuShowing = false;
  }

  fazerLogin(email:string,password:string) {

    this.AuthService.fazerLogin(email,password);
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  authenticate() {
    this.AuthService.fazerLogin('cadubt@gmail.com','admin');
    // const userName = this.loginForm.get('userName').value;
    // const options = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   }),
    //   body: userName,
    // };
    // this.http.get(API_URL + 'api/User/GetUser/' + userName).subscribe((res: any) => {
    // console.log("deu certo esssa bagaça: ", res.data)

    // }, err => {
    //   this.snackbar.open(
    //     'nada a ver brow, tenta denovo',
    //     'Tendeu',
    //     { horizontalPosition: 'right', verticalPosition: 'top', duration: 4000 });
    //   this.loginForm.controls['userName'].reset();
    //   this.loginForm.controls['password'].reset();
    // })
  }



}
