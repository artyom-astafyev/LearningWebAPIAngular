import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:5001/api";
  readonly PhotoUrl = "https://localhost:5001/photos/";
  constructor(private http: HttpClient) { }

  getDepartmentList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/department');
  }

  addDepartment(value: any) {
    return this.http.post(this.APIUrl + '/Department', value);
  }

  updateDepartment(value: any) {
    return this.http.put(this.APIUrl + '/Department', value);
  }

  deleteDepartment(value: any) {
    return this.http.delete(this.APIUrl + '/Department/' + value);
  }

  getEmployeeList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Employee');
  }

  addEmployee(value: any) {
    return this.http.post(this.APIUrl + '/Employee', value);
  }

  updateEmployee(value: any) {
    return this.http.put(this.APIUrl + '/Employee', value);
  }

  deleteEmployee(value: any) {
    return this.http.delete(this.APIUrl + '/Employee/' + value);
  }

  UploadPhoto(value: any) {
    return this.http.post(this.APIUrl + '/Employee/SaveFile', value);
  }

  GetAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + "/Department/GetAllDepartmentNames");
  }
}
