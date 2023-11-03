import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Zones } from 'src/app/classes/zones';
import { SharedService } from 'src/app/services/shared.service';
import { ZoneDetailsComponent } from '../zone-details/zone-details.component';
import { UpdateZoneComponent } from '../update-zone/update-zone.component';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-control-zones',
  templateUrl: './control-zones.component.html',
  styleUrls: ['./control-zones.component.css']
})
export class ControlZonesComponent implements OnInit {

  zonesData = [
    {
      "id": "001",
      "name": "Zone 1",
      "lat": 29.5441309,
      "lng": 103.7693482,
      "radius": 10,
      "color": "#000000",
      "devices": [
        {
          "id": "Device's ID",
          "name": "Device's name",
          "links": [
            {
              "rel": "self",
              "href": "Destination URL"
            }
          ]
        }
      ],
      "actions": [
        {
          "context": "when_out",
          "action_name": "alert",
          "options": {
            "sound": "alarm",
            "alert_message": "Custom message to be displayed on screen",
            "unlock_pass": "Cpassword",
            "missing": "missing"
          }
        }
      ],
      "notifications": {
        "when_in": "off",
        "when_out": "on"
      }
    },
    {
      "id": "002",
      "name": "Zone 2",
      "lat": 29.5441309,
      "lng": 103.7693482,
      "radius": 40,
      "color": "#000000",
      "devices": [
        {
          "id": "Device's ID",
          "name": "Device's name",
          "links": [
            {
              "rel": "self",
              "href": "Destination URL"
            }
          ]
        }
      ],
      "actions": [
        {
          "context": "'when_in",
          "action_name": "lock",
          "options": {
            "sound": "siren",
            "alert_message": "Custom message to be displayed on screen",
            "unlock_pass": "Cpassword",
            "missing": "missing"
          }
        }
      ],
      "notifications": {
        "when_in": "on",
        "when_out": "off"
      }
    },
    {
      "id": "003",
      "name": "Zone 3",
      "lat": 29.5441309,
      "lng": 103.7693482,
      "radius": 80,
      "color": "#000000",
      "devices": [
        {
          "id": "Device's ID",
          "name": "Device's name",
          "links": [
            {
              "rel": "self",
              "href": "Destination URL"
            }
          ]
        }
      ],
      "actions": [
        {
          "context": "when_in,",
          "action_name": "alert",
          "options": {
            "sound": "modem",
            "alert_message": "Custom message to be displayed on screen",
            "unlock_pass": "Cpassword",
            "missing": "missing"
          }
        }
      ],
      "notifications": {
        "when_in": "on",
        "when_out": "off"
      }
    }
  ]
  ZoneInfo!: any[];
  zones: Zones[] = [];
  totalRecords!: any;
  page: number = 1;
  page_size: number = 5;
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private _router: Router,
    private _shared: SharedService,
    private http: HttpClient) { }

  ngOnInit(): void {

    this.loadData();
  }

  loadData() {
    const params = new HttpParams().set('page', this.page).set('page_size', this.page_size);
    this.http.get('http://localhost:8081/Zones', { params }).subscribe((data: any) => {
      this.zones = data;
    });
  }
  changePage(pg: number) {
    this.page += pg;
    this.loadData();
  }
  createZone() {
    this._shared.setZoneDetails([this.zones])
    this._router.navigate(['create-zone']);
  }



  zoneDetails(name: string) {
    this.zones.forEach(zone => {
      if (name === zone.name) {
        this._shared.setZoneDetails([zone])
        this._router.navigate(['zone-details'])

      }

    });

  }

  edit(name: string) {
    this.zones.forEach(zone => {
      if (name === zone.name) {
        this._shared.setZoneDetails(this.zones)
        this._router.navigate(['update-zone'])

      }

    });

  }

}
