import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ShelteredService } from 'src/app/Core/sheltered.service';
import { ShelteredModel } from 'src/app/Models/shelteredModel';
import { ShelteredEditDialogComponent } from '../sheltered-edit/sheltered-edit-dialog/sheltered-edit-dialog.component';

export interface DialogData {
  name: string;
  text: string;
}

@Component({
  selector: 'app-social-edit-sheltered',
  templateUrl: './social-edit-sheltered.component.html',
  styleUrls: ['./social-edit-sheltered.component.scss']
})
export class SocialEditShelteredComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private shelteredService: ShelteredService,
    private router: Router,
    public dialog: MatDialog) {
  }

  shelteredModel: ShelteredModel[] = [];
  selectedSheltId: any;
  isPopulated: any;
  erro: any;
  sheltImage!: any;
  sheltName!: any;
  comboSelectShelt!: FormGroup;
  basicForm!: FormGroup;
  shelteredForm!: FormGroup;
  generalInfoForm!: FormGroup;
  responsibleForm!: FormGroup;

  ngOnInit(): void {
    this.isPopulated = false;
    this.createComboForm();
    this.getShelteredList();
  }

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }

  openDialog(text:string): void {
    const dialogRef = this.dialog.open(ShelteredEditDialogComponent, {
      width: '350px',
      height: '170px',
      data: {name: this.sheltName, text:text}
    });

    dialogRef.afterClosed().subscribe(result => {      
    });
  }

  createComboForm() {
    this.comboSelectShelt = this.formBuilder.group({
      sheltList: [null]
    })
  }

  /**
  * Method to get a List of Sheltered Items
  */
  getShelteredList() {
    this.shelteredService.getShelteredList(1, "APROVADO").subscribe(
      (res: any) => {
        this.shelteredModel = res.data;
      },
      (error: any) => {
        this.erro = error;
      }
    );
  }

  createForms(selectedShelt: ShelteredModel) {
    this.comboSelectShelt = this.formBuilder.group({
      sheltList: [null]
    })
    //Tab 1
    this.basicForm = this.formBuilder.group({
      id: selectedShelt.id,
      name: selectedShelt.name,
      age: selectedShelt.age,
      gender: selectedShelt.gender,
      birthDate: selectedShelt.birthDate,
      phone: selectedShelt.phone,
      address: selectedShelt.address,
      bloodTyping: selectedShelt.bloodTyping,
      entryDate: selectedShelt.entryDate,
      perfilImage: [null],
      deceaseAt: selectedShelt.deceaseAt,
      statusId: selectedShelt.statusId,
      createdAt: selectedShelt.createdAt,
      deletedAt: selectedShelt.deletedAt,
      nationality: selectedShelt.nationality,
      maritalStatus: selectedShelt.maritalStatus,
      city: selectedShelt.city,
      neighborhood: selectedShelt.neighborhood,
      residesin: selectedShelt.residesIn,
      hasIncome: selectedShelt.hasIncome.toString(),
      incomeAmount: selectedShelt.incomeAmount,
      acceptsToBeWelcomed: selectedShelt.acceptsToBeWelcomed.toString(),
      sourceOfIncome: selectedShelt.sourceOfIncome,
      beenAnotherInstitution: selectedShelt.beenAnotherInstitution.toString(),
      anotherInstitutionName: selectedShelt.anotherInstitutionName,
      howFindOutShelter: selectedShelt.howFindOutShelter
    })
    //Tab 2
    this.generalInfoForm = this.formBuilder.group({
      healthProblem: selectedShelt.healthProblem,
      medicalInsurance: selectedShelt.medicalInsurance,
      hasMedicalTreatment: selectedShelt.hasMedicalTreatment.toString(),
      whichHospital: selectedShelt.whichHospital,
      disability: selectedShelt.disability,
      howMoves: selectedShelt.howMoves,
      smoker: selectedShelt.smoker.toString(),
      drinker: selectedShelt.drinker.toString(),
      feedsItself: selectedShelt.feedsItself.toString(),
      controlledMedicine: selectedShelt.controlledMedicine,
      goOutAline: selectedShelt.goOutAline.toString(),
      anyOccurrence: selectedShelt.anyOccurrence
    })
    //Tab 3
    this.responsibleForm = this.formBuilder.group({
      responsibleName: selectedShelt.responsibleName,
      responsibleKinship: selectedShelt.responsibleKinship,
      responsiblePhone: selectedShelt.responsiblePhone,
      responsibleAddress: selectedShelt.responsibleAddress,
      responsibleNeighborhood: selectedShelt.responsibleNeighborhood
    })
  }

  onOptionsSelected() {

    this.shelteredService.getSheltered(this.comboSelectShelt.get('sheltList')!.value).subscribe(
      (res: any) => {
        this.selectedSheltId = res.data.id;
        this.sheltName = res.data.name;
        this.sheltImage = res.data.perfilImage;
        this.createForms(res.data);
        this.isPopulated = true;
        (error: any) => {
          this.erro = error;
        }

      })

  }


  onSubmit() {

    this.shelteredForm = this.formBuilder.group({

      //#region  Values from Form
      id: this.selectedSheltId,
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
      approvalStatus: 'APROVADO',
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

    })

    const formData = this.shelteredForm.getRawValue();
    formData.entryDate = formData.birthDate;
    formData.perfilImage = formData.name.replace(/\s/g, '');
    console.log(formData)
    this.shelteredService.updateSheltered(formData).subscribe(
      (res: any) => {
        this.openDialog(", realizado com sucesso");
      },
      (error: any) => {
        this.openDialog("Erro ao cadastrar acolhido, entre em contato com o administrador do sistema - detalhes do erro: Verifique os campos dos formulários");
      }
    );

  }

}
