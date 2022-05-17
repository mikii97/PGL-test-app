import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl[environment.apiUrl.findIndex(x => x.name === 'generalAPI')].url;
const xApiKey = environment.headers[environment.headers.findIndex(x => x.name === 'x-api-key')].value;


@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  constructor(private http: HttpClient) { }

  getData() {
    const params = new HttpParams()
    .set('x-api-key', xApiKey);
    
    return this.http.get(apiUrl, {params})
    .subscribe(response => {
      console.log("request inside: ", response);      
    })
  }
}
