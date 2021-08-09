import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScheduleSheetService } from 'src/app/Core/schedule-sheet.service';


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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();

  }

  onNavigateTo(pageName:any){
    this.router.navigate([`/${pageName}`]);
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
    // console.log(formData)
    this.scheduleSheetService.createSchadule(formData).subscribe(res => { });
    window.location.href = "sheltered-appointments";
  }
}
