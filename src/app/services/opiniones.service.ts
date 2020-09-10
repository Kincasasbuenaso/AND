import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpinionesService {

  constructor(private http:HttpClient) { }

  getOpiniones() : Observable<any> {
      return this.http.get("../../assets/opiniones.json");
  }
}