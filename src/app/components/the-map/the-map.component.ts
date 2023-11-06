import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

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
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    
    const params = new HttpParams().set('page', this.page).set('page_size', this.page_size);
    this.http.get('http://localhost:8081/Zones', { params }).subscribe((data: any) => {
      this.GeoFence = data;
    });
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1IjoibmVvemEiLCJhIjoiY2xvZnkwOTRiMHh1YTJrcndmam82em42aSJ9.DAxTwxCFRRjQ_BZ7y4ODgw';
     this.map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-71.1860211709, -32.9888719695], // starting position [lng, lat]
      zoom: 9, // starting zoom
      });
      this.map.on('load', () => {
        this.GeoFence.forEach(Geo =>{
          console.log(Geo.id)
          console.log(Geo)
          this.map.addSource(Geo.id, {
            type: 'geojson',
            data: {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {
                      radius:Geo.radius
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            Geo.lng,
                            Geo.lat
                        ]
                    }
                }]
            }
        });
        this.map.addLayer({
        'id': Geo.id,
        'type': 'circle',
        'source': Geo.id,
        'paint': {
        'circle-radius': Geo.radius,
        'circle-color':'transparent',
        'circle-stroke-color':'red',
        'circle-stroke-width':2
        },
        
        });
        });
      });
      
  }
  

}
