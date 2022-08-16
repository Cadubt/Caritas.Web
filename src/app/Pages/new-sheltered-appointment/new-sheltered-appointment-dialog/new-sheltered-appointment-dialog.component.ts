import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogData } from '../new-sheltered-appointment.component';

@Component({
  selector: 'app-new-sheltered-appointment-dialog',
  templateUrl: './new-sheltered-appointment-dialog.component.html',
  styleUrls: ['./new-sheltered-appointment-dialog.component.scss']
})
export class NewShelteredAppointmentDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewShelteredAppointmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  onOk(){
    this.dialogRef.close();
    if(!this.data.error)
      this.onNavigateTo("sheltered-appointments");   
  }

  onNavigateTo(pageName: any){
    this.router.navigate([`/${pageName}`]);
  }

}
