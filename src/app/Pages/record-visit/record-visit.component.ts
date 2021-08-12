import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RecordVisitService } from 'src/app/Core/record-visit.service';
import { DialogComponent } from 'src/app/Shared/dialog/dialog.component';

@Component({
  selector: 'app-record-visit',
  templateUrl: './record-visit.component.html',
  styleUrls: ['./record-visit.component.scss']
})
export class RecordVisitComponent implements OnInit {

  recordVisitForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private recordVisitService: RecordVisitService,
    private router: Router,
    public dialog: MatDialog
  ) {

  }
  creatvisitorModel: any;
  erro: any;
  ngOnInit(): void {
    this.createForm();
  }

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }

  createForm() {
    this.recordVisitForm = this.formBuilder.group({
      name: [null],
      phone: [null],
      kinshipId: [null],
      adress: [null],
      rg: [null],
      shelteredId: 1,
      visitDate: [null]
    })

  }
  onSubmit() {
    const formData = this.recordVisitForm.getRawValue();
    // console.log(formData)
    this.recordVisitService.createVisit(formData).subscribe(
      (res: any) => {
        this.openDialog("Registro Salvo");
      },
      (error: any) => {
        this.erro = error;
        this.openDialog("Ocorreu um erro:");
      }
    );    
  }


  openDialog(msg:any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',   
      data:msg,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('tudo ok ;D');
    });
  }

}