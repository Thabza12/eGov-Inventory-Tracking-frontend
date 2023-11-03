import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(private http:HttpClient){}
  map!: mapboxgl.Map;
  geofences:any[]=[];
  ngOnInit(): void {
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1IjoibmVvemEiLCJhIjoiY2xvZnkwOTRiMHh1YTJrcndmam82em42aSJ9.DAxTwxCFRRjQ_BZ7y4ODgw'
     this.map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [28.11280040425119, -25.94478836550434], // starting position [lng, lat]
      zoom: 9, // starting zoom
      });
      const path ='53d668';
      this.http.get('http://localhost:8081/Zones/'+path).subscribe((data:any)=>{
        this.geofences=data;
      });
      this.map.on('load',()=>{
        this.geofences.forEach(geofence=>{
          this.map.addLayer({
            id:'fence-radius',
            type:'circle',
            source:{
              type:'geojson',
              data:{
                type:'Feature',
                properties:{},
                geometry:{
                  type:'Point',
                  coordinates:geofence.coordinates
                }
              }
            },paint:{
              'circle-radius':geofence.radius,
              'circle-color':'transparent',
              'circle-stroke-color':geofence.color,
              'circle-stroke-width':2
            }
          });

        })
      });
  }

}
