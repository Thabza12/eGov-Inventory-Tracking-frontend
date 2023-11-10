import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';

export interface DailogData {
  name: string;
}

@Component({
  selector: 'app-device-hardware',
  templateUrl: './device-hardware.component.html',
  styleUrls: ['./device-hardware.component.css']
})
export class DeviceHardwareComponent implements OnInit{


  systemData: any
  motherboardData: any
  cpuData: any
  ramData: any
  networkInterfaceData: any

  constructor(private _shared: SharedService, 
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DeviceHardwareComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DailogData){}

  ngOnInit(): void {
    this.systemData = this._shared.getDeviceHardware()[0];
    console.log('system data', this.systemData.name);
    this.motherboardData = this._shared.getDeviceHardware()[1];
    console.log('motherboard data', this.motherboardData);
    this.cpuData = this._shared.getDeviceHardware()[2];
    console.log('cpu data', this.cpuData);
    this.ramData = this._shared.getDeviceHardware()[3];
    console.log('ram data', this.ramData);
    this.networkInterfaceData = this._shared.getDeviceHardware()[4];
    console.log('network interface data', this.networkInterfaceData);
  }

}
