import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Employeeservice {
  private apiUrl = 'http://localhost:3000/employees';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  // ✅ GET all employees
  // Notifications - next,error,complete
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  // ✅ GET single employee by ID
  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  // ✅ POST - Add new employee
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  // ✅ PUT - Update existing employee
  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/${employee.id}`, employee, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  // ✅ DELETE - Remove employee by ID
  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  // 🔎 Error handler
  private handleError(error: any) {
    console.error('API error:', error);
    return throwError(() => error);
  }
}
