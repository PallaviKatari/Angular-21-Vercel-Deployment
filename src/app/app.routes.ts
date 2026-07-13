import { Routes } from '@angular/router';
import { TypescriptDemo } from './typescript-demo/typescript-demo';
import { ControlFlow } from './control-flow/control-flow';
import { DataBinding } from './data-binding/data-binding';
import { Employee } from './employee/employee';

export const routes: Routes = [
  { path: 'typescript-demo', component: TypescriptDemo },
  { path: 'control-flow', component: ControlFlow },
  { path: 'data-binding', component: DataBinding },
  { path: 'employee', component: Employee }
];
