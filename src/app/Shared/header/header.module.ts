import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
