import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../models/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments: Department[] = [];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Department[]> {
    return this.http.get<Department[]>('http://localhost:5003/Department');
  }

  setDepartments(departments: Department[]): void {
    this.departments = departments;
  }

  getDepartments(): Department[] {
    return this.departments;
  }
}