import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(http:HttpClient){}
  map!: mapboxgl.Map;
  geofences:any[]=[
    {
      id:'McDonald',
      coordinates:[28.109291259845257, -26.018600700505942],
      radius:50,
      color:'blue'
    },
    {
      id:'Pnp',
      coordinates:[28.11280040425119, -25.94478836550434],
      radius:100,
      color:'red'
    }
  ];
  ngOnInit(): void {
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1IjoibmVvemEiLCJhIjoiY2xvZnkwOTRiMHh1YTJrcndmam82em42aSJ9.DAxTwxCFRRjQ_BZ7y4ODgw'
     this.map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [28.11280040425119, -25.94478836550434], // starting position [lng, lat]
      zoom: 9, // starting zoom
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
