import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserConfigurationService } from 'src/app/Core/user-configuration.service';
import { UserConfigurationDialogComponent } from './user-configuration-dialog/user-configuration-dialog.component';

export interface DialogData {
  name: string;
  text: string;
}

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
    private userConfigurationService: UserConfigurationService,
    public dialog: MatDialog
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

  openDialog(text: string): void {
    const dialogRef = this.dialog.open(UserConfigurationDialogComponent, {
      width: '350px',
      height: '150px',
      data: { text: text }
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
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
    const actualPassword = this.userConfigurationForm.get('password')!.value;
    const newPassword = this.userConfigurationForm.get('newPassword')!.value;
    const repeatPassword = this.userConfigurationForm.get('repeatPassword')!.value;

    this.usuario.name = this.userConfigurationForm.get('name')!.value;
    this.usuario.email = this.userConfigurationForm.get('email')!.value;

    //Ele quer atualizar a senha
    if (actualPassword != null && actualPassword != '') {
      if (actualPassword == this.usuario.password) {
        if (newPassword == repeatPassword) {

          this.usuario.name = this.userConfigurationForm.get('name')!.value;
          this.usuario.email = this.userConfigurationForm.get('email')!.value;
          this.usuario.password = this.userConfigurationForm.get('newPassword')!.value;
          if ((this.usuario.name == null) || (this.usuario.name == "")) {
            this.usuario.name = sessionStorage.getItem("userName");
          }
          if ((this.usuario.email == null) || (this.usuario.email == "")) {
            this.usuario.email = sessionStorage.getItem("userEmail");
          }
          this.userConfigurationService.updateUser(this.usuario).subscribe(
            (res: any) => { 
              this.openDialog("Alterações feitas com sucesso!");
            },
            (error: any) => {
              this.openDialog("Ocorreu o seguinte erro " + error.toString());
            }
          );
        }
        else {
          this.openDialog("As senhas não coincidem");
        }
      }
      else {
        this.openDialog("Sua senha atual esta errada");
      }


    }
    //Ele não quer atualizar a senha
    else {
      this.usuario.name = this.userConfigurationForm.get('name')!.value;
      this.usuario.email = this.userConfigurationForm.get('email')!.value;
      if ((this.usuario.name == null) || (this.usuario.name == "")) {
        this.usuario.name = sessionStorage.getItem("userName");
      }
      if ((this.usuario.email == null) || (this.usuario.email == "")) {
        this.usuario.email = sessionStorage.getItem("userEmail");
      }
      this.userConfigurationService.updateUser(this.usuario).subscribe(
        (res: any) => { 
          this.openDialog("Alterações feitas com sucesso!");
        },
        (error: any) => {
          this.openDialog("Ocorreu o seguinte erro " + error.toString());
        }
      );
      sessionStorage.setItem("userName", this.usuario.name)
      sessionStorage.setItem("userEmail", this.usuario.email)
      
    }
  }
}
