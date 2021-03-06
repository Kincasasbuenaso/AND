import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteresesService {

  constructor(private http:HttpClient) { }

  getIntereses() : Observable<any> {
      return this.http.get("../../assets/intereses.json");
  }
}
