import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-the-map',
  templateUrl: './the-map.component.html',
  styleUrls: ['./the-map.component.css']
})
export class TheMapComponent implements OnInit {
  map!: mapboxgl.Map;
  page:number =1;
  page_size:number = 20;
  GeoFence:any[]=[];
  id:any;
  lat:any;
  lng:any;
  radius:any;
  color:any;
  constructor(private http:HttpClient, private _shared:SharedService){}
  ngOnInit(): void {
    this.id = this._shared.getZonesDetails()[0].id;
    this.lat = this._shared.getZonesDetails()[0].lat;
    this.lng = this._shared.getZonesDetails()[0].lng;
    this.radius = this._shared.getZonesDetails()[0].radius;
    this.color = this._shared.getZonesDetails()[0].color;

    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1IjoibmVvemEiLCJhIjoiY2xvZnkwOTRiMHh1YTJrcndmam82em42aSJ9.DAxTwxCFRRjQ_BZ7y4ODgw';
     this.map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [this.lng, this.lat], // starting position [lng, lat]
      zoom: 14, // starting zoom
      });
      this.map.on('load', () => {
          console.log(this.id)
          this.map.addSource(this.id, {
            type: 'geojson',
            data: {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {
                      radius:this.radius
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                          this.lng,
                          this.lat
                        ]
                    }
                }]
            }
        });
        this.map.addLayer({
        'id': this.id,
        'type': 'circle',
        'source': this.id,
        'paint': {
        'circle-radius': this.radius,
        'circle-color':'transparent',
        'circle-stroke-color':this.color,
        'circle-stroke-width':2
        },
        
        });
      });
      
  }
  

}
