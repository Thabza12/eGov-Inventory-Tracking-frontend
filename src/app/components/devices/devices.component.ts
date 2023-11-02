import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Devices } from 'src/app/classes/devices';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit{

  devices: Devices[] = [];
  totalRecords!: any;
  page: number = 1;

  constructor(private _shared: SharedService,
    private _router: Router){}

  ngOnInit(): void{

    this.devices = this._shared.getDevices();
    this.totalRecords = this.devices.length;

  }

  deviceDetails(key: any){
    this.devices.forEach(device => {
      if (key === device.key) {
        this._shared.setDeviceDetails(device)
        this._router.navigate(['device-details']);
      }
      
    });

    

  }

  

}
