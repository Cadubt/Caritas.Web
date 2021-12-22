import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.BASE_URL_API;
@Injectable({
  providedIn: 'root'
})
export class AdminConfigurationService {

  constructor(
    private http: HttpClient
  ) { }

  getUserById(){
    const headerToken = new HttpHeaders({ Authorization: "Bearer " + sessionStorage.getItem("token")});
    var urlString=`${API_URL}User/GetUserById?UserId=${sessionStorage.getItem("userId")}`;
    return this.http.get(urlString, {headers:headerToken});
  }

  updateUser(FormData: any): Observable<any> {
    const headerToken = new HttpHeaders({ Authorization: "Bearer " + sessionStorage.getItem("token")});
    return this.http.put(`${API_URL}User/Update`, FormData, {headers:headerToken});
  }
}
