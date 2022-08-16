import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogData } from '../user-configuration.component';

@Component({
  selector: 'app-user-configuration-dialog',
  templateUrl: './user-configuration-dialog.component.html',
  styleUrls: ['./user-configuration-dialog.component.scss']
})
export class UserConfigurationDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserConfigurationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  onOk(){
    this.dialogRef.close();
    this.onNavigateTo(["user-dashboard"]);
    
  }

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }

}
