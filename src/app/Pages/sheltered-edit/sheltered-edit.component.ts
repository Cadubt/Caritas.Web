import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShelteredService } from 'src/app/Core/sheltered.service';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { ShelteredModel } from 'src/app/Models/shelteredModel';
import { ModalService } from 'src/app/Core/modal.service';
import { Subscription } from 'rxjs';
import { ListUsersComponent } from '../list-users/list-users.component';
import { ShelteredEditModalComponent } from './sheltered-edit-modal/sheltered-edit-modal.component';

@Component({
  selector: 'app-sheltered-edit',
  templateUrl: './sheltered-edit.component.html',
  styleUrls: ['./sheltered-edit.component.scss']
})
export class ShelteredEditComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private shelteredService: ShelteredService,
    private router: Router,
    private modalService: ModalService) {
  }

  @ViewChild('modal', { read: ViewContainerRef, static: true })
  entry!: ViewContainerRef;
  sub!: Subscription;

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

  openMyModal(titulo:string, conteudo:string) {
    // MyComponent é o componente que será renderizado dentro do seu body
        this.sub = this.modalService
          .openModal(this.entry, titulo, ShelteredEditModalComponent)
          .subscribe((v) => {
            // dispara quando é aberto o modal
          });
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

  createComboForm() {
    this.comboSelectShelt = this.formBuilder.group({
      sheltList: [null]
    })
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
        this.openMyModal("Cadastro de acolhido, realizado com sucesso","");
        // alert("Cadastro de acolhido, realizado com sucesso");
      },
      (error: any) => {
        this.openMyModal("Erro ao cadastrar acolhido, entre em contato com o administrador do sistema - detalhes do erro: Verifique os campos dos formulários","");
        
      }
    );

  }
}


