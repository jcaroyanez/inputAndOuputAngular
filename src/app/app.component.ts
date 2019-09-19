import { Component } from '@angular/core';
import { Employee } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listEmployees: Employee[] = [
    {"id":41009,"name":"Payal","salary":1041,"age":61},
    {"id":41010,"name":"testak_40","salary":1039,"age":59},
    {"id":41011,"name":"testak_43","salary":1042,"age":62},
    {"id":41012,"name":"testak_44","salary":1043,"age":63},
    {"id":41015,"name":"testak_47","salary":1046,"age":66},
    {"id":41018,"name":"testak_50","salary":1049,"age":69}
  ];

  employeeSelected: Employee;
    
  constructor(){}

  getEmployee(event){
    this.employeeSelected = event;
  }

}
