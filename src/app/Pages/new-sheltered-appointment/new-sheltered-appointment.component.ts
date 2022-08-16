import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ScheduleSheetService } from 'src/app/Core/schedule-sheet.service';
import { NewShelteredAppointmentDialogComponent } from './new-sheltered-appointment-dialog/new-sheltered-appointment-dialog.component';

export interface DialogData {
  error: boolean;
  text: string;
}

@Component({
  selector: 'app-new-sheltered-appointment',
  templateUrl: './new-sheltered-appointment.component.html',
  styleUrls: ['./new-sheltered-appointment.component.scss']
})
export class NewShelteredAppointmentComponent implements OnInit {

  shelteredAppointment!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private scheduleSheetService: ScheduleSheetService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.createForm();

  }

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }

  openDialog(text: string, erro: boolean): void {
    const dialogRef = this.dialog.open(NewShelteredAppointmentDialogComponent, {
      width: '350px',
      height: '180px',
      data: { text: text, error: erro }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  createForm() {
    this.shelteredAppointment = this.formBuilder.group({
      shelteredName: [null],
      shelteredAge: [null],
      shelteredPhone: [null],
      shelteredAddress: [null],
      responsibleName: [null],
      kinshipId: [null],
      responsiblePhone: [null],
      responsibleAddress: [null],
      interviewDate: [null],
      scheduleDate: [null],
      observation: [null],
      scheduleResponsible: [null],
      createdAt: [null],
      deletedAt: [null]
    })
  }

  onSubmit() {
    const formData = this.shelteredAppointment.getRawValue();
    formData.kinshipId = parseInt(formData.kinshipId);
    formData.shelteredAge = parseInt(formData.shelteredAge);
    formData.createdAt = formData.interviewDate;

    this.scheduleSheetService.createSchadule(formData).subscribe(
      (res: any) => {
        this.openDialog("Salvo com Sucesso", false);
       },
      (error: any) => {
        this.openDialog("Preencha os campos obrigatórios indicados em vermelho", true);
       }
    );
  }
}
