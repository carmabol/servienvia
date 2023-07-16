import { Routes } from '@angular/router';
import { LoginComponent } from './login';


export const SECURITY_ROUTES: Routes = [
  // Security routes
  { path: 'login', component: LoginComponent },
  /*{ path: 'token', component: TokenComponent },
  { path: 'error', component: ErrorComponent },*/
  // Default route
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
