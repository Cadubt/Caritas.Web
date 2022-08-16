import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShelteredService } from 'src/app/Core/sheltered.service';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { NewShelteredDialogComponent } from './new-sheltered-dialog/new-sheltered-dialog.component';

export interface DialogData {
  error: boolean;
  text: string;
}

@Component({
  selector: 'app-new-sheltered',
  templateUrl: './new-sheltered.component.html',
  styleUrls: ['./new-sheltered.component.scss']
})
export class NewShelteredComponent implements OnInit {

  shelteredForm!: FormGroup;
  basicForm!: FormGroup;
  generalInfoForm!: FormGroup;
  responsibleForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private shelteredService: ShelteredService,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.createForms();

  }

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }

  openDialog(text: string, erro: boolean): void {
    const dialogRef = this.dialog.open(NewShelteredDialogComponent, {
      width: '350px',
      height: '170px',
      data: { text: text, error:erro }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
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
    this.responsibleForm = this.formBuilder.group({
      responsibleName: [null],
      responsibleKinship: [null],
      responsiblePhone: [null],
      responsibleAddress: [null],
      responsibleNeighborhood: [null]
    })
  }

  onSubmit() {

    this.shelteredForm = this.formBuilder.group({

      //#region  Values from Form
      name: this.basicForm.get('name')!.value,
      age: this.basicForm.get('age')!.value,
      birthDate: this.basicForm.get('birthDate')!.value,
      gender: this.basicForm.get('gender')!.value,      
      phone: this.basicForm.get('phone')!.value,
      address: this.basicForm.get('address')!.value,
      bloodTyping: this.basicForm.get('bloodTyping')!.value,
      nationality: this.basicForm.get('nationality')!.value,
      maritalStatus: this.basicForm.get('maritalStatus')!.value,
      neighborhood: this.basicForm.get('neighborhood')!.value,
      city: this.basicForm.get('city')!.value,
      hasIncome: this.basicForm.get('hasIncome')!.value,
      sourceOfIncome: this.basicForm.get('sourceOfIncome')!.value,
      residesin: this.basicForm.get('residesin')!.value,
      acceptsToBeWelcomed: this.basicForm.get('acceptsToBeWelcomed')!.value,
      beenAnotherInstitution: this.basicForm.get('beenAnotherInstitution')!.value,
      anotherInstitutionName: this.basicForm.get('anotherInstitutionName')!.value,
      howFindOutShelter: this.basicForm.get('howFindOutShelter')!.value,
      entryDate: [null],
      perfilImage: this.basicForm.get('perfilImage')!.value,
      deceaseAt: this.basicForm.get('deceaseAt')!.value,
      statusId: 1,
      createdAt: this.basicForm.get('createdAt')!.value,
      deletedAt: this.basicForm.get('deletedAt')!.value,
      approvalStatus: 'XABLAU',
      incomeAmount: this.basicForm.get('incomeAmount')!.value,
      
      //Responsible Info
      responsibleName: this.responsibleForm.get('responsibleName')!.value,
      responsibleKinship: this.responsibleForm.get('responsibleKinship')!.value,
      responsiblePhone: this.responsibleForm.get('responsiblePhone')!.value,
      responsibleAddress: this.responsibleForm.get('responsibleAddress')!.value,
      responsibleNeighborhood: this.responsibleForm.get('responsibleNeighborhood')!.value,
      
      //General Info
      healthProblem: this.generalInfoForm.get('healthProblem')!.value,
      medicalInsurance: this.generalInfoForm.get('medicalInsurance')!.value,
      hasMedicalTreatment: this.generalInfoForm.get('hasMedicalTreatment')!.value,
      whichHospital: this.generalInfoForm.get('whichHospital')!.value,
      disability: this.generalInfoForm.get('disability')!.value,
      howMoves: this.generalInfoForm.get('howMoves')!.value,
      smoker: this.generalInfoForm.get('smoker')!.value,
      drinker: this.generalInfoForm.get('drinker')!.value,
      feedsItself: this.generalInfoForm.get('feedsItself')!.value,
      controlledMedicine: this.generalInfoForm.get('controlledMedicine')!.value,
      goOutAline: this.generalInfoForm.get('goOutAline')!.value,
      anyOccurrence: this.generalInfoForm.get('anyOccurrence')!.value
      //#endregion


      //#region  Values For testing
      
      // name: "Maria de Lurdes",
      // age: 75,
      // birthDate: "1944-07-13 03:00:00.0000000",
      // gender: "f",
      // phone: "11985858558",
      // address: "Rua das Provincias",
      // bloodTyping: "O+",
      // nationality: "Brasileiro",
      // maritalStatus: "Viuva",
      // neighborhood: "Penha",
      // city: "São Paulo",
      // hasIncome: 1,
      // sourceOfIncome: "Aposentadoria",
      // residesin: "Alugada",
      // acceptsToBeWelcomed: 1,
      // beenAnotherInstitution: 1,
      // anotherInstitutionName: "Mansão do Caminho",
      // howFindOutShelter: "",
      // entryDate: [null],
      // perfilImage: [null],
      // deceaseAt: [null],
      // statusId: 1,
      // createdAt: "2022-03-27 03:00:00.0000000",
      // deletedAt: [null],
      // approvalStatus: "Em Análise",
      // incomeAmount: 2500.50,
      
      // //Responsible Info
      // responsibleName: "João da Silva Filho",
      // responsibleKinship: "Filho",
      // responsiblePhone: "11985589789",
      // responsibleAddress: "Rua das Provincias",
      // responsibleNeighborhood: "Penha",
      
      // //General Info
      // healthProblem: "Dores nas costas",
      // medicalInsurance: "Amil",
      // hasMedicalTreatment: 1,
      // whichHospital: "Hospital Santa Clara",
      // disability: "Cadeirante",
      // howMoves: "Com Cadeira de rodas",
      // smoker: 1,
      // drinker: 0,
      // feedsItself: 1,
      // controlledMedicine: "Politenuo Semi perpétuo",
      // goOutAline: 1,
      // anyOccurrence: [null]

      //#endregion

    })


    const formData = this.shelteredForm.getRawValue();
    formData.entryDate = formData.birthDate;
    formData.perfilImage = formData.name.replace(/\s/g, '');
    console.log(formData)
    this.shelteredService.createSheltered(formData).subscribe(
      (res: any) => {
        this.openDialog("Cadastro de acolhido, realizado com sucesso", false);
      },
      (error: any) => {
        this.openDialog("Verifique e preencha os campos obrigatórios indicados com *", true);
      }
    );
  }
}
