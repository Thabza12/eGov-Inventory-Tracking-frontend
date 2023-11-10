import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { DeviceHardwareComponent } from '../device-hardware/device-hardware.component';
import { LockDeviceComponent } from '../lock-device/lock-device.component';
import { ApiService } from 'src/app/services/api.service';
import { ArletMessageComponent } from '../arlet-message/arlet-message.component';
import { AlarmComponent } from '../alarm/alarm.component';

@Component({
  selector: 'app-all-devices-details',
  templateUrl: './all-devices-details.component.html',
  styleUrls: ['./all-devices-details.component.css']
})
export class AllDevicesDetailsComponent implements OnInit{
  

  deviceInfos!: any[];
  details: any;

  constructor(private _service: ApiService,
    private _shared: SharedService,
    private _router: Router,
    public dialog: MatDialog){}

  ngOnInit(): void {
    this.details = this._shared.getDeviceDetails();
    console.log(this.details);
  }

  lock(id: any){
    console.log(id)

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: id
    }
    
    dialogConfig.autoFocus = false;

    const dialogRef = this.dialog.open(LockDeviceComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data =>{
      console.log("dialog closed", data);
    })

  }

  arlet(id: any){
    console.log(id)

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: id
    }
    
    dialogConfig.autoFocus = false;

    const dialogRef = this.dialog.open(ArletMessageComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data =>{
      console.log("dialog closed", data);
    })

  }

  alarm(id: any){
    console.log(id)

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: id
    }
    
    dialogConfig.autoFocus = false;

    const dialogRef = this.dialog.open(AlarmComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data =>{
      console.log("dialog closed", data);
    })

  }

  missing(id: any){
    if (this.details.missing == false) {
      let body = {
        missing: true,
        options: {
          report_frequency: "2"
        }
      }
      
      this._service.putApiKot(`device/${id}/missing`, body).subscribe(data =>{
        console.log(data);
      })

    }else if (this.details.missing == true) {
      let body = {
        missing: false,
        options: {
          report_frequency: "2"
        }
      }
      console.log(body)
      this._service.putApiKot(`device/${id}/missing`, body)
      
    }
  }

  hardware(){
    // console.log(this.details.device_details.hardware);
    this._shared.setDeviceHardware(this.details.device_details.hardware)
    // this._router.navigate(['device-hardware']);
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.autoFocus = false;

    const dialogRef = this.dialog.open(DeviceHardwareComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data =>{
      console.log("dialog closed", data);
    })
  }

}
