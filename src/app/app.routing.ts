import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Default route
  { path: '', redirectTo: 'security', pathMatch: 'full' },
  // Content routes
  /*{
    path: 'content',
    loadChildren: () => import('./components/content/content.module').then(m => m.ContentModule),
    canActivate: [AuthenticatedGuard]
  },*/
  // Security routes

  /*{
    path: 'security',
    loadComponent: () => import('./components/security/login/login.component').then(m => m.SecurityComponent)
  },*/
  {
    path: 'security',
    loadChildren: () =>
      import('./components/security/security.routing').then(
        (m) => m.SECURITY_ROUTES
      ),
  },
  { path: '**', redirectTo: 'security', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
