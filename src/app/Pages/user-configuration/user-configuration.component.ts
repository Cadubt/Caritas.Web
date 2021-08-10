import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserConfigurationService } from 'src/app/Core/user-configuration.service';

@Component({
  selector: 'app-user-configuration',
  templateUrl: './user-configuration.component.html',
  styleUrls: ['./user-configuration.component.scss']
})
export class UserConfigurationComponent implements OnInit {

  // userConfigurationForm: FormGroup;

  userConfigurationForm = new FormGroup({
    firstName: new FormControl()
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userConfigurationService: UserConfigurationService
  ) {

  }

  error: any;
  usuario: any;
  UserModel: any;

  ngOnInit(): void {
    this.getUserConfigurationData();
    this.createForm();
  }

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }

  createForm() {
    this.userConfigurationForm = this.formBuilder.group({
      id!: [null],
      name!: [null],
      password!: [null],
      newPassword!: [null],
      repeatPassword!: [null],
      email!: [null],
      role!: [null],
      createdAt!: [null],
      deletedAt!: [null]
    })

    this.usuario = this.formBuilder.group({
      id!: [null],
      name!: [null],
      password!: [null],
      email!: [null],
      role!: [null],
      createdAt!: [null],
      deletedAt!: [null]
    })
  }

  getUserConfigurationData() {
    this.userConfigurationService.getUserById().subscribe(
      (res: any) => {
        console.log(this.usuario)
        this.usuario = res.data;
        console.log(this.usuario)
      })

  }

  onSubmit() {
    const actualPassword = this.userConfigurationForm.get('name');

    console.log();
    
  }
}
