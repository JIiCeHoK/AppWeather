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

    url = 'https://api.openweathermap.org';

    constructor(private httpClient: HttpClient) { }

    getCity$(city: string): Observable<any> {
        return this.httpClient.get<any>(
            this.url + '/data/2.5/weather',
            {
                params: {
                    q: city,
                    lang: 'ru',
                    units: 'metric',
                    appid: 'a5679c72aa6b81efbaa0a3eaa4fc7e1e',
                }
            }
        );
    }
}
