import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { FullScreenPageComponent } from '../../pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from '../../pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from '../../pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from '../../pages/zoom-range-page/zoom-range-page.component';

@Component({
  standalone:true,
  imports:[
    RouterModule,
    CommonModule,
    FullScreenPageComponent,
    ZoomRangePageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    SideMenuComponent
  ],
  templateUrl: './maps-layout.component.html',
  styleUrls: ['./maps-layout.component.css']
})
export class MapsLayoutComponent {

}
