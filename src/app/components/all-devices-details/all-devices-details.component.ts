import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-all-devices-details',
  templateUrl: './all-devices-details.component.html',
  styleUrls: ['./all-devices-details.component.css']
})
export class AllDevicesDetailsComponent implements OnInit{
  

  deviceInfos!: any[];
  details: any;

  constructor(private _shared: SharedService){}

  ngOnInit(): void {
    this.details = this._shared.getDeviceDetails();
    console.log(this.details);
  }

}
