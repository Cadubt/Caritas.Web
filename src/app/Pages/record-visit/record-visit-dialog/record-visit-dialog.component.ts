import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogData } from '../record-visit.component';

@Component({
  selector: 'app-record-visit-dialog',
  templateUrl: './record-visit-dialog.component.html',
  styleUrls: ['./record-visit-dialog.component.scss']
})
export class RecordVisitDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RecordVisitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  onOk(){
    this.dialogRef.close();
    if(!this.data.error)
      this.onNavigateTo(["past-visit"]);
  }

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }

}
