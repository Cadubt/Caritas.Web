import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShelteredService } from 'src/app/Core/sheltered.service';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { ShelteredModel } from 'src/app/Models/shelteredModel';

@Component({
  selector: 'app-sheltered-edit',
  templateUrl: './sheltered-edit.component.html',
  styleUrls: ['./sheltered-edit.component.scss']
})
export class ShelteredEditComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private shelteredService: ShelteredService,
    private router: Router) {
  }

  shelteredModel: ShelteredModel[] = [];
  isPopulated: any;
  erro: any;
  comboSelectShelt!: FormGroup;
  nomeDoAcolhido!: any;

  ngOnInit(): void {
    this.isPopulated = false;
    this.createForms();
    this.getShelteredList();
    
  }

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }

  /**
   * Method to get a List of Sheltered Items
   */
  getShelteredList() {
    this.shelteredService.getShelteredList(1, "APROVADO").subscribe(
      (res: any) => {
        this.shelteredModel = res.data;
        console.log(this.shelteredModel);
      },
      (error: any) => {
        this.erro = error;
      }
    );
  }

  createForms() {
    this.comboSelectShelt = this.formBuilder.group({
      sheltList: [null]
    })
  }

  onOptionsSelected() {
    this.isPopulated = true;
    console.log(this.comboSelectShelt.get('sheltList')!.value);


    this.shelteredService.getSheltered(this.comboSelectShelt.get('sheltList')!.value).subscribe(
      (res: any) => {
          console.log(res.data);
          this.nomeDoAcolhido = res.data.name;
      (error: any) => {
          this.erro = error;
      }
  
})
    
  }



}
