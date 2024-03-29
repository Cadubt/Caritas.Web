import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NewShelteredAppointmentComponent } from './new-sheltered-appointment.component';
import { NewShelteredAppointmentDialogComponent } from './new-sheltered-appointment-dialog/new-sheltered-appointment-dialog.component';


@NgModule({
  declarations: [NewShelteredAppointmentComponent, NewShelteredAppointmentDialogComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatSelectModule,
  ],
  exports:[NewShelteredAppointmentComponent],
  schemas: []

})
export class NewShelteredAppointmentModule { }
