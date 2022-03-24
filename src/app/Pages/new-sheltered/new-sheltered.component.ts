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
  generalInfoForm!: FormGroup;
  contactForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private shelteredService: ShelteredService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.createForms();

  }

  onNavigateTo(pageName: any) {
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
      acceptsToBeWelcomed: [null],
      sourceOfIncome: [null],
      beenAnotherInstitution: [null],
      anotherInstitutionName: [null],
      howFindOutShelter: [null]
    })
    //Tab 2
    this.generalInfoForm = this.formBuilder.group({
      // healthProblem: [null],
      // medicalInsurance: [null],
      // hasMedicalTreatment: [null],
      // whichHospital: [null],
      // disability: [null],
      // howMoves: [null],
      // smoker: [null],
      // drinker: [null],
      // feedsItself: [null],
      // controlledMedicine: [null],
      // goOutAline: [null],
      // anyOccurrence: [null]
      healthProblem: [null],
      medicalInsurance: "Amil",
      hasMedicalTreatment: "Tratamento das Amigdalas",
      whichHospital: "Hospital das amigdalas de São Paulo",
      disability: [null],
      howMoves: "Sozinho mas com dificuldade",
      smoker: 1,
      drinker: 1,
      feedsItself: 1,
      controlledMedicine: "Politeno semi perpetuo",
      goOutAline: 1,
      anyOccurrence: "Caiu de cabeça do 23 andar ha dois dias",
    })
    //Tab 3
    this.contactForm = this.formBuilder.group({
      nameContact: [null],
      kinship: [null],
      phoneContact: [null],
      addressContact: [null],
      neighborhoodContact: [null]
    })
  }

  onSubmit() {




    this.shelteredForm = this.formBuilder.group({
      //#region  Values from Form
      // name: this.basicForm.get('name')!.value,
      // age: this.basicForm.get('age')!.value,
      // gender: this.basicForm.get('gender')!.value,
      // birthDate: this.basicForm.get('birthDate')!.value,
      // phone: this.basicForm.get('phone')!.value,
      // address: this.basicForm.get('address')!.value,
      // bloodTyping: this.basicForm.get('bloodTyping')!.value,
      // entryDate: this.basicForm.get('entryDate')!.value,
      // perfilImage: this.basicForm.get('perfilImage')!.value,
      // deceaseAt: this.basicForm.get('deceaseAt')!.value,
      // statusId: 1,
      // createdAt: this.basicForm.get('createdAt')!.value,
      // deletedAt: this.basicForm.get('deletedAt')!.value,
      // nationality: this.basicForm.get('nationality')!.value,
      // maritalStatus: this.basicForm.get('maritalStatus')!.value,
      // city: this.basicForm.get('city')!.value,
      // neighborhood: this.basicForm.get('neighborhood')!.value,
      // residesin: this.basicForm.get('residesin')!.value,
      // hasIncome: this.basicForm.get('hasIncome')!.value,
      // incomeAmount: this.basicForm.get('incomeAmount')!.value,
      // acceptsToBeWelcomed: this.basicForm.get('acceptsToBeWelcomed')!.value,
      // sourceOfIncome: this.basicForm.get('sourceOfIncome')!.value,
      // beenAnotherInstitution: this.basicForm.get('beenAnotherInstitution')!.value,
      // anotherInstitutionName: this.basicForm.get('anotherInstitutionName')!.value,
      // howFindOutShelter: this.basicForm.get('howFindOutShelter')!.value,

      // healthProblem: this.generalInfoForm.get('healthProblem')!.value,
      // medicalInsurance: this.generalInfoForm.get('medicalInsurance')!.value,
      // hasMedicalTreatment: this.generalInfoForm.get('hasMedicalTreatment')!.value,
      // whichHospital: this.generalInfoForm.get('whichHospital')!.value,
      // disability: this.generalInfoForm.get('disability')!.value,
      // howMoves: this.generalInfoForm.get('howMoves')!.value,
      // smoker: this.generalInfoForm.get('smoker')!.value,
      // drinker: this.generalInfoForm.get('drinker')!.value,
      // feedsItself: this.generalInfoForm.get('feedsItself')!.value,
      // controlledMedicine: this.generalInfoForm.get('controlledMedicine')!.value,
      // goOutAline: this.generalInfoForm.get('goOutAline')!.value,
      // anyOccurrence: this.generalInfoForm.get('anyOccurrence')!.value,

      // nameContact: this.contactForm.get('nameContact')!.value,
      // kinship: this.contactForm.get('kinship')!.value,
      // phoneContact: this.contactForm.get('phoneContact')!.value,
      // addressContact: this.contactForm.get('addressContact')!.value,
      // neighborhoodContact: this.contactForm.get('neighborhoodContact')!.value
      //#endregion


      //#region  Values For testing
      name: "Carlos da Silva",
      age: 80,
      gender: "m",
      birthDate: "1944-07-13 03:00:00.0000000",
      phone: "11985858558",
      address: "Rua Tal",
      bloodTyping: "0-",
      entryDate: "2022-03-24 03:00:00.0000000",
      perfilImage: [null],
      deceaseAt: [null],
      statusId: 1,
      createdAt: "2022-03-24 03:00:00.0000000",
      deletedAt: [null],
      nationality: "Brasil",
      maritalStatus: "Solteiro",
      city: "São Paulo",
      neighborhood: "Penha",
      residesin: "Alugada",
      hasIncome: 1,
      incomeAmount: 3000.00,
      acceptsToBeWelcomed: 1,
      sourceOfIncome: "Aposentadoria",
      beenAnotherInstitution: 1,
      anotherInstitutionName: "Abrigo la la la",
      howFindOutShelter: "Conhece desde jovem",

      generalInfoForm: this.generalInfoForm,

      nameContact: "João manoel da Silva",
      kinship: "Filho",
      phoneContact: "65456545",
      addressContact: "Rua tal",
      neighborhoodContact: "Penha"
      //#endregion

    })


    const formData = this.shelteredForm.getRawValue();
    formData.entryDate = formData.birthDate;
    formData.perfilImage = formData.name.replace(/\s/g, '');
    console.log(formData)
    this.shelteredService.createSheltered(formData).subscribe(res => { });
    // window.location.href = "dashboard";
  }

}
