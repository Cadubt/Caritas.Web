import { Component, OnInit, AfterViewInit } from '@angular/core';

import { AuthService } from 'src/app/Core/auth.service';
import { RouterModule, Router } from '@angular/router';
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
  showMenu = true;

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router, 
  ) { }


  ngOnInit(): void {
    this.authService.hideMenu();
    this.authService.isMenuShowing = false;
    this.createForm();
  }

  ngAfterViewInit() {
    this.authService.hideMenu();
    this.authService.isMenuShowing = false;
  }

  // fazerLogin(email:string,password:string) {

  //   this.AuthService.fazerLogin(email,password);

  // }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  authenticate() {
    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: this.loginForm,
    };
    const formData = this.loginForm.getRawValue();

    this.http.post(API_URL + 'User/login/', formData).subscribe((res: any) => {
      console.log("Usuário Logado no Sistema ", res);

      sessionStorage.setItem('token',res.token)
      sessionStorage.setItem('userId',res.user.id)
      sessionStorage.setItem('userName',res.user.name)
      sessionStorage.setItem('userRole',res.user.role)
      sessionStorage.setItem('userEmail',res.user.email)
      sessionStorage.setItem('userDeleted',res.user.deletedAt)
      this.onNavigateTo(["dashboard"]);

    }, err => {
      this.snackbar.open(        
        'Não foi possível se conectar',
        'Usuário ou senha invalidos',
        { horizontalPosition: 'right', verticalPosition: 'top', duration: 4000 });
      this.loginForm.controls['email'].reset();
      this.loginForm.controls['password'].reset();
    })
  }

  onNavigateTo(pageName: any){
    this.router.navigate([`/${pageName}`]);
  }



}
