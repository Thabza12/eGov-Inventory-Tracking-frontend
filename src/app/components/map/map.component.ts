import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Input} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(private http:HttpClient,private _shared:SharedService){}
  map!: mapboxgl.Map;
  id:any;
  lat:any;
  lng:any;
  mapData: any;
  radius:any;
  color:any;
  ngOnInit(): void {
    this.mapData = this._shared.getMapData();
    console.log(this.mapData);
    this.id = this.mapData.id;
    this.lng = this.mapData.lng;
    this.lat = this.mapData.lat;
    
    //this.id = this._shared.getZonesDetails()[0].id;
    //   this.lat = this._shared.getZonesDetails()[0].lat;
    //   this.lng = this._shared.getZonesDetails()[0].lng;
    //   this.radius = this._shared.getZonesDetails()[0].radius;
    //   this.color = this._shared.getZonesDetails()[0].color;

    
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1IjoibmVvemEiLCJhIjoiY2xvZnkwOTRiMHh1YTJrcndmam82em42aSJ9.DAxTwxCFRRjQ_BZ7y4ODgw'
     this.map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [this.lng, this.lat], // starting position [lng, lat]
      zoom: 9, // starting zoom
      });
      
      this.map.on('load', () => {
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
        // 'circle-radius': this.radius,
        'circle-color':'red',
        // 'circle-stroke-color':'blue',
        // 'circle-stroke-width':2
        },
        
        });
      });
  }

}
