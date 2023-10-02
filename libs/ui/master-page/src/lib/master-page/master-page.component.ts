import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../../src/models/Department';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {NgIf, NgFor, AsyncPipe} from '@angular/common';
import {Observable, Observer} from 'rxjs';

export interface ExampleTab {
  label: string;
  content?: Department;
}

@Component({
  standalone: true,
  selector: 'lib-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss'],
  imports: [
    MatButtonModule, MatCardModule, MatTabsModule, NgIf, NgFor, AsyncPipe
  ]
})
export class MasterPageComponent implements OnInit {
  
  asyncTabs: Observable<ExampleTab[]> = new Observable();

  departments: Department [] = [];

  config = {
    enviando: false,
    loading: false
  }

  constructor(private departmentService: DepartmentService) { 
  }

  async ngOnInit(): Promise<void> {
    this.config.loading = true;
    this.loadDepartments();
    console.log(this.departments);
    this.config.loading = false;
  }
  async loadDepartments() {
    this.departmentService.getAll().subscribe(departments => {
      departments.map(department => {
        this.departments.push(department);

        this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
          setTimeout(() => {
            const exampleTabs: ExampleTab[] = departments.map(department => {
              return {label: department.name, content: department};
            }).concat([
            ]);
            observer.next(exampleTabs);
          }, 1000);
        });
      });
    });
  }
}
