import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterPageComponent } from './master-page/master-page.component';
import { DepartmentService } from '../services/department.service'

@NgModule({
  imports: [CommonModule, MasterPageComponent],
  exports: [MasterPageComponent],
  declarations: [],
  providers: [DepartmentService],
})
export class MasterPageModule {}
