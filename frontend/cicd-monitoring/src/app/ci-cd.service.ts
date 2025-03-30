import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CiCdService {

  private apiUrl = 'http://localhost:8000/ci-status';

  constructor(private http: HttpClient) { }

  getCiCdStatus() {
    return this.http.get(this.apiUrl);
  }
}
