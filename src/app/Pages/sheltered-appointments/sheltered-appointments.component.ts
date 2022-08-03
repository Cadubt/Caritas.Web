import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ScheduleSheetService } from 'src/app/Core/schedule-sheet.service';
@Component({
  selector: 'app-sheltered-appointments',
  templateUrl: './sheltered-appointments.component.html',
  styleUrls: ['./sheltered-appointments.component.scss']
})
export class ShelteredAppointmentsComponent implements OnInit {
  shelteredAppointment!: FormGroup;
  constructor(
    private router: Router,
    private scheduleSheetService: ScheduleSheetService) { }

    scheduleModel:any;
    displayedColumns: string[] = ['ScheduleDate','ShelteredName','ResponsibleName','ResponsiblePhone'];
    erro:any;
  ngOnInit(): void {
    
    this.getShelteredList();

  }

  onNavigateTo(pageName:any){
    this.router.navigate([`/${pageName}`]);
  }

  onSubmit() {
    const formData = this.shelteredAppointment.getRawValue();
    console.log(formData)
    this.scheduleSheetService.createSchadule(formData).subscribe(res => { });
  }

  //** *Method to get a List of Schedule Items */
  getShelteredList() {
    this.scheduleSheetService.getScheduleList().subscribe(
      (res: any) => {
        this.scheduleModel = new MatTableDataSource(res.data);
        console.log('Dado sendo recebido: ', res.data);
      },
      (error: any) => {
        this.erro = error;
        console.log('Ocorreu o seguinte Erro: ', error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.scheduleModel.filter = filterValue.trim().toLowerCase();
  }
}
