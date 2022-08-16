import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { NewShelteredComponent } from './new-sheltered.component';
import { NewShelteredDialogComponent } from './new-sheltered-dialog/new-sheltered-dialog.component';




@NgModule({
  declarations: [NewShelteredComponent, NewShelteredDialogComponent],
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
  exports:[NewShelteredComponent],
  schemas: []
})
export class NewShelteredModule { }
