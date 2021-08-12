import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { DialogComponent } from './dialog.component';


@NgModule({
    declarations: [DialogComponent],
    imports: [
        CommonModule,
        MatButtonModule
    ],
    exports: [DialogComponent],
    schemas: []
})
export class DialogModule { }