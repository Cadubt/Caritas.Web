import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


const API_URL = environment.BASE_URL_API;

@Injectable({
  providedIn: 'root'
})
export class RecordVisitService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Cria um visitante com base no que foi preenchido no formulario   * @param FormData 
   * @returns 
   */
    createVisit(FormData: any): Observable<any> {
      const headerToken = new HttpHeaders({ Authorization: "Bearer " + sessionStorage.getItem("token")});
      return this.http.post(`${API_URL}Visitor/CreateVisitors`, FormData, {headers:headerToken});
    }

}


  



