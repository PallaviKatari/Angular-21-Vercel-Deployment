import { Component } from '@angular/core';
import {Parent} from '../parent/parent';

@Component({
  selector: 'app-control-flow', // class,id
  standalone: true,
  imports: [Parent],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  isLoggedIn: boolean = false;

  userRole: string = 'admin';

  score:number=70;

  employees =
  [
    { name: 'John Doe', age: 30, position: 'Software Engineer' },
    { name: 'Jane Smith', age: 28, position: 'UI/UX Designer' },
    { name: 'Mike Johnson', age: 35, position: 'Project Manager' },
    { name: 'Emily Davis', age: 32, position: 'Quality Assurance Engineer' },
    { name: 'David Wilson', age: 29, position: 'DevOps Engineer' },
    { name: 'Sarah Brown', age: 31, position: 'Frontend Developer' },
    { name:'Sam',age:30,position:'Trainer'}
  ]

  toggleLogin(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }

  changeUserRole(role: string): void {
    this.userRole = role;
  }

}
