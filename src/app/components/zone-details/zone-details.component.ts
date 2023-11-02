import { Component, Inject, OnInit } from '@angular/core';
import { Zones } from 'src/app/classes/zones';
import { SharedService } from 'src/app/services/shared.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { ZoneDevices } from 'src/app/classes/zone-devices';
import { Actions } from 'src/app/classes/actions';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Devices } from 'src/app/classes/devices';
import { Notifications } from 'src/app/classes/notifications';

export interface DailogData {
  // lat: any;
  // name: string;
  id: string,
  name: string,
  lat: any,
  lng: any
  radius: number,
  color: any,
  devices: Devices,
  actions: Actions,
  notifications: Notifications

}

@Component({
  selector: 'app-zone-details',
  templateUrl: './zone-details.component.html',
  styleUrls: ['./zone-details.component.css']
})
export class ZoneDetailsComponent implements OnInit {



  details!: any[];
  devices: ZoneDevices[] = [];
  actions: Actions[] = [];
  totalRecords!: any;
  page: number = 1;
  viewsView: [number, number] = [250, 250];
  colorScheme: Color = {
    name: 'lineGraph',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#0000ff']
  };
  radius!: any
  cardColor: string = '#0000ff';
  totalActions!: any;
  totalDevices!: any;

  constructor(private _shared: SharedService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ZoneDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DailogData) { }


  ngOnInit(): void {

    this.dialogRef.disableClose = false;

    const details = this._shared.getZonesDetails();
    console.log(details[0].name);
    details.forEach(element => {
      if (this.data.name === element.name) {
        this.details = [element];
        this.radiusCard(element);
        this.zoneDevices(element);
        this.zoneActions(element);
        console.log('zone details', element);
      }
    });


  }

  zoneDevices(data: any) {
    if (data.devices) {
      this.devices = data.devices;
      this.totalDevices = this.devices.length;
      console.log('devices', this.devices);
    }

  }

  zoneActions(data: any) {
    if (data.actions) {
      this.actions = data.actions;
      this.totalActions = this.actions.length;
      console.log('actions', this.actions);
    }

  }

  radiusCard(data: any) {
    if (data.radius) {
      let radius = data.radius
      // data.forEach((ele: any) => {
      //   radius = ele.radius
      // });

      // console.log(data[0]);

      const radiusObj = [{
        name: 'Radius',
        value: radius
      }]

      console.log(radiusObj);

      this.radius = radiusObj;
    }

  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

}
