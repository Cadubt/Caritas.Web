import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL = environment.BASE_URL_API;
@Injectable({
  providedIn: 'root'
})
export class UserConfigurationService {

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

  getUsers(){
    const headerToken = new HttpHeaders({ Authorization: "Bearer " + sessionStorage.getItem("token")});
    var urlString=`${API_URL}User/ListUsers`;
    return this.http.get(urlString, {headers:headerToken});
  }

}

