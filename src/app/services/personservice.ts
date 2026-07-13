import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root',
})
export class Personservice {
  private persons: Person[] = [
    {
      id: 1, name: 'John Doe', age: 30,
      greet: function (): string {
        throw new Error('Function not implemented.');
      }
    },
    {
      id: 2, name: 'Jane Smith', age: 25,
      greet: function (): string {
        throw new Error('Function not implemented.');
      }
    },
    {
      id: 3, name: 'Alice Johnson', age: 35,
      greet: function (): string {
        throw new Error('Function not implemented.');
      }
    },
  ];
  
  getPersons(): Person[] {
    return this.persons;
  }
}
