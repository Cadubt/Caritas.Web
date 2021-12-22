import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_URL = environment.BASE_URL_API;

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor(private http: HttpClient) { }

  getMenuList(){
    const headerToken = new HttpHeaders({ Authorization: "Bearer " + sessionStorage.getItem("token")});

    let url = `${API_URL}Menu/ListMenu?UserRole=${sessionStorage.getItem("userRole")}`;

    return this.http.get(url, {headers:headerToken});
  }
}
