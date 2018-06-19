import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiServiceService {
  private readonly BASE_URL = 'https://fantasyfootballapi.herokuapp.com/';
  constructor(private http: HttpClient) { }

  getDraft(year: string) {
    console.log(this.BASE_URL + year);
    return this.http.get(this.BASE_URL + 'draft/' + year);
  }

  getRound(year: string, round: string) {
    return this.http.get(this.BASE_URL + year + '/' + round);
  }
}
