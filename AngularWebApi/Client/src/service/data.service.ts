import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string = 'http://localhost:61757/api/';

  constructor(private http:HttpClient) { }

  get(controllerName: string){
    return this.http.get(this.baseUrl + controllerName);
  }
}
