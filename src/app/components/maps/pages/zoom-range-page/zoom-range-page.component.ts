import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  standalone:true,
  imports:[CommonModule],
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy{
  ngOnDestroy(): void {
    this.map?.remove();
  }
  @ViewChild('map')
  public divMap?: ElementRef;

  public zoom: number = 10;
  public map?: mapboxgl.Map;
  public currentLngLat?: mapboxgl.LngLat= new mapboxgl.LngLat(-81.70305723410905, 12.583605977675404);

  ngAfterViewInit(): void {
    if(!this.divMap) throw 'No cargó el mapa';

    //this.divMap?.nativeElement
    this.map = new mapboxgl.Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
      });

      this.mapListeners();
  }

  mapListeners(){
    if(!this.map) throw 'Mapa not found';

    this.map.on('zoom', (event)=>{
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (event)=>{
      if(this.map!.getZoom()<18) return;
      this.map?.zoomTo(18);
    });

    this.map.on('move',()=>
    {
      this.currentLngLat = this.map!.getCenter();
    })
  }

  zoomIn(){
    this.map?.zoomIn();
  }

  zoomOut(){
    this.map?.zoomOut();
  }

  zoomChanged(value:string){
    this.zoom= Number(value);
    this.map?.zoomTo(this.zoom);
  }
}
