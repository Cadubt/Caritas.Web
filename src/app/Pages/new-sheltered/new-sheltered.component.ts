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

  constructor(
    private formBuilder: FormBuilder,
    private shelteredService: ShelteredService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.createForm();

  }

  onNavigateTo(pageName:any) {
    this.router.navigate([`/${pageName}`]);
  }

  createForm() {
    this.shelteredForm = this.formBuilder.group({
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
      residesin: [null]
    })
  }

  onSubmit() {
    
    const formData = this.shelteredForm.getRawValue();
    formData.entryDate = formData.birthDate;
    formData.perfilImage = formData.name.replace(/\s/g, '');
    console.log(formData)
    this.shelteredService.createSheltered(formData).subscribe(res => { });
    window.location.href = "dashboard";
  }

}
