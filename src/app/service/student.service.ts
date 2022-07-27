import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../model/student/student";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
const API_URL =environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) {

  }

  getAll(): Observable<any> {
    return this.httpClient.get<any>(API_URL);
  }

  save(student:Student):Observable<Student>{
    return this.httpClient.post<Student>(API_URL,student);

  }

  update(id:any,student:Student):Observable<Student>{
    return this.httpClient.put<Student>(API_URL+"/"+id,student)
  }

  findById(id:any): Observable<Student>{
    return this.httpClient.get<Student>(API_URL+"/"+id)
  }

  delete(id: number): Observable<Student> {
    return this.httpClient.delete<Student>(API_URL+'/'+id);
  }
}
