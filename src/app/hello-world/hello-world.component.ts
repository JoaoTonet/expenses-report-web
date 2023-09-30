import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent implements OnInit {


  constructor(
    private departmentService: DepartmentService) {
  }

  text = "Hello World!"
  isDisabled = false;

  ngOnInit(): void {
    this.departmentService.getAll().subscribe(
      data => {
        console.log(data);
      }
    )
  }
  changeColor() : void {
    this.text = "Talvez no futuro..."
    this.isDisabled = true;
  }
}