import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiServiceService {
  private readonly BASE_URL = 'http://localhost:8000/';
  constructor(private http: HttpClient) { }

  getDraft(year: number) {
    console.log(this.BASE_URL + year);
    return this.http.get(this.BASE_URL + 'draft/' + year);
  }
}
