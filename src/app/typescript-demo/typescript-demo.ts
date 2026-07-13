import { Component } from '@angular/core';
import { Person } from '../models/person';
import {Personservice} from '../services/personservice';

@Component({
  selector: 'app-typescript-demo',
  standalone: true,
  imports: [],
  templateUrl: './typescript-demo.html',
  styleUrl: './typescript-demo.css',
})
export class TypescriptDemo {

  persons: Person[] = [];

  constructor(private personService: Personservice) {
    this.persons = this.personService.getPersons();
  }

  // Variables
  company: string = 'TechCorp';
  year: number = 2024;
  isActive: boolean = true;

  // Arrays
  technologies: string[] = ['Angular', 'TypeScript', 'JavaScript'];

  numbers: number[] = [1, 2, 3, 4, 5];
  // Objects
  employee: { name: string; age: number; position: string } = {
    name: 'John Doe',
    age: 30,
    position: 'Software Engineer',
  };

  // Any
  data: any = 'This can be any type';

  // Tuple
  coordinates: [number, number] = [40.7128, -74.006];

  // enum
  role: Role = Role.Admin;

  // Function
  greet(): string {
    return `Welcome to ${this.company} in the year ${this.year}`;
  }

  // Arrow Function
  getTechnologies = (): string[] => {
    return this.technologies; // Angular,TypeScript,JavaScript
  };

  // Interface Implementation
  emp: Employee = {
    name: 'Jane Smith',
    age: 28,
    greet: () => 'Hello, I am Jane Smith!',
  };

  displayEmployeeInfo(): string {
    return `Employee Name: ${this.emp.name}, Age: ${this.emp.age}, Greeting: ${this.emp.greet()}`;
  }

  person: Person = {
    id: 1,
    name: 'Alice Johnson',
    age: 35,
    greet: () => 'Hi, I am Alice Johnson!',
  };

  displayPersonInfo(): string {
    return `Person Name: ${this.person.name}, Age: ${this.person.age}, Greeting: ${this.person.greet()}`;
  }

}

// Enum
enum Role {
  Admin = 'Admin',
  User = 'User',
  Guest = 'Guest',
}

// Interface
interface Employee {
  name: string;
  age: number;
  greet(): string;
}
