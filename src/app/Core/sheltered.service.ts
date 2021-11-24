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
  getShelteredList(sheltStatus?: bigint) {
    console.log(sheltStatus)
    
    const headerToken = new HttpHeaders({ Authorization: "Bearer " + sessionStorage.getItem("token")});

    if (sheltStatus !== undefined)    
      var urlString = `${API_URL}Sheltered/ListSheltereds?statusId=${sheltStatus}`;
    else
      var urlString = `${API_URL}Sheltered/ListSheltereds?statusId=1`;
    return this.http.get(urlString, {headers:headerToken})
  }

  getSheltered(sheltId: bigint) {
    var urlString = `${API_URL}Sheltered/${sheltId}`;
    console.log(`Retorno aqui: ${urlString}`);
    return this.http.get(urlString)
  }

  createSheltered(FormData: any): Observable<any> {
    return this.http.post(`${API_URL}Sheltered/Create`, FormData);
  }

}
