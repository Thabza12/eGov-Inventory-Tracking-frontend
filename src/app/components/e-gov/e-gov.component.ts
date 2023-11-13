import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-e-gov',
  templateUrl: './e-gov.component.html',
  styleUrls: ['./e-gov.component.css'],
})
export class EGovComponent implements OnInit {
  SearchParams: string = '';
  LaptopData!: any[];
  page: number = 1;
  totalRecords: any;

  constructor(private http: HttpClient, private service :ApiService,private _shared:SharedService, private _router:Router) {}
  ngOnInit(): void {
    this.search();
  }
  search() {
    const params = new HttpParams().set('txt50', this.SearchParams);
    console.log(this.SearchParams);
    this.http
      .get('http://localhost:8081/eGov', { params })
      .subscribe((data: any) => {
        this.LaptopData = data;
        console.log(this.LaptopData);
      });
  }
  deviceDetails(Id: any) {
    this.service.getApiKot(`Device/${Id}`).subscribe((data) => {
      let mapData = {
        id: Id,
        lat: data.location.lat,
        lng: data.location.lng
      }
      this._shared.setMapData(mapData);
      this._shared.setDeviceDetails(data)
      this._router.navigate(['device-management']);
      console.log(data);
    });
  }
}
