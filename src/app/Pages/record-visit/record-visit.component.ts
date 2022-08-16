import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RecordVisitService } from 'src/app/Core/record-visit.service';
import { RecordVisitDialogComponent } from './record-visit-dialog/record-visit-dialog.component';

export interface DialogData {
  error: string;
  text: string;
}

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
    public dialog: MatDialog) {

  }
  creatvisitorModel: any;
  erro: any;
  ngOnInit(): void {
    this.createForm();
  }

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }

  openDialog(text: string, erro: boolean): void {
    const dialogRef = this.dialog.open(RecordVisitDialogComponent, {
      width: '350px',
      height: '170px',
      data: { text: text, error:erro }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
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
    console.log(formData)
    this.recordVisitService.createVisit(formData).subscribe(
      (res: any) => {
        this.openDialog("Salvo com Sucesso", false);
       },
      (error: any) => {
        this.openDialog("Preencha os campos obrigatórios indicados em vermelho", true);
       }
    );
    
    // window.location.href = "past-visit"; // vai para a pasta: "past-visit"
  }

}