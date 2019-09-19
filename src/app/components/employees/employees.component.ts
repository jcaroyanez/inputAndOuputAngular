import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  @Input()employee: Employee;
  
  @Output()$sendEmployee = new EventEmitter<Employee>();

  constructor() { }

  ngOnInit() {
  }

  sendEmployee(){
     this.$sendEmployee .emit(this.employee);
  }
  
  /*
    @Input()
    set employee(employee: Employee){
      console.log(employee);
    }
  */

}
