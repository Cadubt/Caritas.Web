import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

const API_URL = environment.BASE_URL_API;

@Injectable({
  providedIn: 'root'
})
export class ScheduleSheetService {

  shelteredModel:any;
  erro:any;
  shelteredAppointment!: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder) { }

  createForm() {
    this.shelteredAppointment = this.formBuilder.group({
      shelteredName: [null],
      shelteredAge: [null],
      shelteredPhone: [null],
      shelteredAddress: [null],
      responsibleName: [null],
      testRecipient: [null],
      kinshipId: [null],
      responsiblePhone: [null],
      responsibleAddress: [null],
      interviewDate: [null],
      scheduleDate: [null],
      observation: [null],
      scheduleResponsible: [null],
      createdAt: [null],
      deletedAt: [null]
    });
  }

  createSchadule(FormData: any): Observable<any> {
    const headerToken = new HttpHeaders({ Authorization: "Bearer " + sessionStorage.getItem("token")});
    return this.http.post(`${API_URL}ScheduleSheet/Create`, FormData, {headers:headerToken});
  }

  getScheduleList() {
    const headerToken = new HttpHeaders({ Authorization: "Bearer " + sessionStorage.getItem("token")});
    var urlString = `${API_URL}ScheduleSheet/ListScheduleSheet`;
    return this.http.get(urlString, {headers:headerToken});
  }
}
