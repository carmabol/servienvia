import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

//--Buscar la manera de definir esto local si no se maneja Modules
import * as mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1IjoiY2FybWFib2wiLCJhIjoiY2t5d2pzYWNvMDkzcjJvdGRidDhpdWhociJ9.BM1QYjGYwUj6LgF6zhxLog';


@Component({
  standalone:true,
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit{
  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {
    console.log("aaaa",this.divMap);
    if(!this.divMap) throw 'No cargó el mapa';

    //this.divMap?.nativeElement
    const map = new mapboxgl.Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      });
  }



}
