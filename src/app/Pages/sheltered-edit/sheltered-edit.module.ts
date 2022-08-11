import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { ShelteredEditComponent } from './sheltered-edit.component';
import { MatCardModule } from '@angular/material/card';
import { ShelteredEditDialogComponent } from './sheltered-edit-dialog/sheltered-edit-dialog.component';


@NgModule({
  declarations: [ShelteredEditComponent, ShelteredEditDialogComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatTabsModule,
    MatSelectModule,
    FormsModule, 
    ReactiveFormsModule,
    
  ],
  exports:[ShelteredEditComponent],
  schemas: []
})
export class ShelteredEditModule { }