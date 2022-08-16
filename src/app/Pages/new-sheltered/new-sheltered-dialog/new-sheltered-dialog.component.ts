import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogData } from '../new-sheltered.component';

@Component({
  selector: 'app-new-sheltered-dialog',
  templateUrl: './new-sheltered-dialog.component.html',
  styleUrls: ['./new-sheltered-dialog.component.scss']
})
export class NewShelteredDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewShelteredDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  onOk(){
    this.dialogRef.close();
    if(!this.data.error)
      this.onNavigateTo(["dashboard"]);
  }

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }

}
