import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const API_URL = environment.BASE_URL_API;

@Injectable({
  providedIn: 'root'
})
export class PastVistService {

  constructor(
    private http: HttpClient
  ) { }

  getVistorList() {
    const headerToken = new HttpHeaders({ Authorization: "Bearer " + sessionStorage.getItem("token")});
    var urlString = `${API_URL}Visitor/ListVisitors`;
    return this.http.get(urlString, {headers:headerToken});
  }
}
