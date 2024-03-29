import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { UserConfigurationComponent } from './user-configuration.component';
import { UserConfigurationDialogComponent } from './user-configuration-dialog/user-configuration-dialog.component';


@NgModule({
  declarations: [UserConfigurationComponent, UserConfigurationDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[UserConfigurationComponent], 
  schemas: []
})
export class UserConfigurationModule { }
