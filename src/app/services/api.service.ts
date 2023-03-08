import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    headers = new HttpHeaders({
        Authorization: 'Bearer a5679c72aa6b81efbaa0a3eaa4fc7e1e',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    });

    url = 'api.openweathermap.org';

    constructor(private httpClient: HttpClient) { }

    get$(): Observable<any> {
        return this.httpClient.get<any>(
            'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=a5679c72aa6b81efbaa0a3eaa4fc7e1e'
        );
    }
}
