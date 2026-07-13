import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employeeservice } from '../services/employeeservice';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.html',
  styleUrls: ['./employee.css']
})
export class Employee {
  private service = inject(Employeeservice);

  employees: any[] = [];
  employee: any = {};

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.service.getEmployees().subscribe(data => {
      // If API returns array directly:
      this.employees = data;
      console.log('Employees fetched:', this.employees);
    });
  }

  save() {
    if (this.employee.id) {
      this.service.updateEmployee(this.employee).subscribe(() => {
        this.loadEmployees();
        this.employee = {};
      });
    } else {
      this.service.addEmployee(this.employee).subscribe(() => {
        this.loadEmployees();
        this.employee = {};
      });
    }
  }

  edit(emp: any) {
    this.employee = { ...emp };
  }

  delete(id: number) {
    this.service.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();
    });
  }
}
