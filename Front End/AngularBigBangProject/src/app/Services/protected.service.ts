import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { Status } from '../Models/status';


@Injectable({
  providedIn: 'root'
})
export class ProtectedService {
  //private baseUrl=environment.baseUrl;
  constructor(private http:HttpClient) { }
  
  getUserData(){
    return this.http.get<Status>(`https://localhost:7266/api/protected/getdata`);
  }

  getAdminData(){
    return this.http.get<Status>(`https://localhost:7266/api/Admin`);
  }

}