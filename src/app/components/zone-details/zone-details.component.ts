import { Component, Inject, OnInit } from '@angular/core';
import { Zones } from 'src/app/classes/zones';
import { SharedService } from 'src/app/services/shared.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { ZoneDevices } from 'src/app/classes/zone-devices';
import { Actions } from 'src/app/classes/actions';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Devices } from 'src/app/classes/devices';
import { Notifications } from 'src/app/classes/notifications';

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

  constructor(private _shared: SharedService) { }


  ngOnInit(): void {

    this.details = this._shared.getZonesDetails();
    this.radiusCard(this._shared.getZonesDetails());
    this.zoneDevices(this._shared.getZonesDetails());
    this.zoneActions(this._shared.getZonesDetails());
    console.log('zone details', this.details);

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
