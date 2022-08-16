import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogData } from '../sheltered-edit.component';

@Component({
  selector: 'app-sheltered-edit-dialog',
  templateUrl: './sheltered-edit-dialog.component.html',
  styleUrls: ['./sheltered-edit-dialog.component.scss']
})
export class ShelteredEditDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ShelteredEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router,
  ) {}

  ngOnInit(): void {    
  }

  onOk(){
    this.dialogRef.close();
    this.onNavigateTo(["dashboard"]);    
  }

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }

}
