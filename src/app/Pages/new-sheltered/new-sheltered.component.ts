import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShelteredService } from 'src/app/Core/sheltered.service';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';

@Component({
  selector: 'app-new-sheltered',
  templateUrl: './new-sheltered.component.html',
  styleUrls: ['./new-sheltered.component.scss']
})
export class NewShelteredComponent implements OnInit {

  shelteredForm!: FormGroup;
  basicForm!: FormGroup;
  generalIndoForm!: FormGroup;
  contactForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private shelteredService: ShelteredService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.createForms();

  }

  onNavigateTo(pageName:any) {
    this.router.navigate([`/${pageName}`]);
  }

  createForms() {
    //Tab 1
    this.basicForm = this.formBuilder.group({
      name: [null],
      age: [null],
      gender: [null],
      birthDate: [null],
      phone: [null],
      address: [null],
      bloodTyping: [null],
      entryDate: [null],
      perfilImage: [null],
      deceaseAt: [null],
      statusId: 1,
      createdAt: [null],
      deletedAt: [null],

      nationality: [null],
      maritalStatus: [null],
      city: [null],
      neighborhood: [null],
      residesin: [null],
      hasIncome: [null],
      incomeAmount: [null],
      acceptsToBeWelcomed:[null],
      sourceOfIncome:[null],
      beenAnotherInstitution:[null],
      anotherInstitutionName:[null],
      howFindOutShelter:[null]
    })
    //Tab 2
    this.generalIndoForm = this.formBuilder.group({
      healthProblem: [null],
      medicalInsurance: [null],
      hasMedicalTreatment: [null],
      whichHospital: [null],
      disability: [null],
      howMoves: [null],
      smoker: [null],
      drinker: [null],
      feedsItself: [null],
      controlledMedicine: [null],
      goOutAline: [null],
      anyOccurrence: [null]
    })
    //Tab 3
    this.contactForm = this.formBuilder.group({
      name: [null]
    })
  }

  onSubmit() {
    
    const formData = this.basicForm.getRawValue();
    formData.entryDate = formData.birthDate;
    formData.perfilImage = formData.name.replace(/\s/g, '');
    console.log(formData)
    this.shelteredService.createSheltered(formData).subscribe(res => { });
    window.location.href = "dashboard";
  }

}
