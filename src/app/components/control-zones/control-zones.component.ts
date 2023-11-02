import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Zones } from 'src/app/classes/zones';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';
import { ZoneDetailsComponent } from '../zone-details/zone-details.component';
import { UpdateZoneComponent } from '../update-zone/update-zone.component';

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

  zones: Zones[] = [];
  totalRecords!: any;
  page: number = 1;

  constructor(private _router: Router,
    private _shared: SharedService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.zones = this.zonesData

  }

  createZone() {
    this._shared.setZoneDetails([this.zones])
    this._router.navigate(['create-zone']);
  }



  openDialog(name: string) {

    this._shared.setZoneDetails(this.zones)
    // this._router.navigate(['zone-details'])

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = false;

    dialogConfig.data = {
      name: name
    }

    const dialogRef = this.dialog.open(ZoneDetailsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      console.log(`Dialog result: ${data}`);
    });

    // this.zones.forEach(zone => {
    //   if (name === zone.name) {


    //   }

    // });



  }

  edit(name: string){

    console.log(name);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;

    let selectedZone: Zones = new Zones()

    for (let i = 0; i < this.zones.length; i++) {
      const zone = this.zones[i];
      if (name == zone.name) {
        selectedZone = zone
        this._shared.setZoneDetails(selectedZone);
      }
      
    }

    dialogConfig.data = {
      
      id: selectedZone.id,
      name: selectedZone.name,
      lat: selectedZone.lat,
      lng: selectedZone.lng,
      radius: selectedZone.radius,
      color: selectedZone.color,
      devices: selectedZone.devices,
      actions: selectedZone.actions,
      notifications: selectedZone.notifications

    }

    const dialogRef = this.dialog.open(UpdateZoneComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data =>{
      console.log("dialog output: ", data);
    })

  }

}
