import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_URL = environment.BASE_URL_API;

@Injectable({
    providedIn: 'root'
})

export class ListUsersService {

    constructor(private http: HttpClient) { }

    getListUsers() {
        var urlString = `${API_URL}User/ListUsers`;
        return this.http.get(urlString)
    }
}

