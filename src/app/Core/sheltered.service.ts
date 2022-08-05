import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


const API_URL = environment.BASE_URL_API;

@Injectable({
  providedIn: 'root'
})
export class ShelteredService {

  constructor(private http: HttpClient) { }

  /**
   * Method to get a List of Sheltered Items
   * @returns 
   */
  getShelteredList(sheltStatus?: number, approvalStatus?: string) {    
    const headerToken = new HttpHeaders({ Authorization: "Bearer " + sessionStorage.getItem("token")});

    if (sheltStatus !== undefined)    
      var urlString = `${API_URL}Sheltered/ListSheltereds?statusId=${sheltStatus}&approvalStatus=${approvalStatus}`;
    else
      var urlString = `${API_URL}Sheltered/ListSheltereds?statusId=1&approvalStatus=APROVADO`;
    return this.http.get(urlString, {headers:headerToken})
  }

  getSheltered(sheltId: bigint) {
    const headerToken = new HttpHeaders({ Authorization: "Bearer " + sessionStorage.getItem("token")});

    var urlString = `${API_URL}Sheltered/${sheltId}`;
    return this.http.get(urlString, {headers:headerToken})
  }

  createSheltered(FormData: any): Observable<any> {
    const headerToken = new HttpHeaders({ Authorization: "Bearer " + sessionStorage.getItem("token")});

    return this.http.post(`${API_URL}Sheltered/Create`, FormData, {headers:headerToken})
  }

}
