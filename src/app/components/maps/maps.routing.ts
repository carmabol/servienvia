import { Routes } from '@angular/router';
import { MapsLayoutComponent } from './layouts/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';


export const MAPS_ROUTES: Routes = [
  {
    path:'',
    component: MapsLayoutComponent,
    children: [
      { path: 'fullscreen', component: FullScreenPageComponent },
      { path: 'zoom-range', component: ZoomRangePageComponent },
      { path: 'markers', component: MarkersPageComponent },
      { path: 'properties', component: PropertiesPageComponent },
      { path: '**', redirectTo: 'fullscreen' },

    ]

  }

  // Security routes
  //{ path: 'login', component: LoginComponent },
  /*{ path: 'token', component: TokenComponent },
  { path: 'error', component: ErrorComponent },*/
  // Default route
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
];
/*
export const MAPS_LAOYUT_ROUTES: Routes = [
  { path: 'fullscreen', component: FullScreenPageComponent },
  { path: 'zoom-range', component: ZoomRangePageComponent },
  { path: 'markers', component: MarkersPageComponent },
  { path: '**', redirectTo: 'fullscreen' },
];
*/
