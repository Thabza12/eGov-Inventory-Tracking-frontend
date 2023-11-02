import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departments } from 'src/app/classes/departments';
import { Devices } from 'src/app/classes/devices';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments: Departments[] = [];
  totalRecords!: any;
  page: number = 1;
  devices: any

  constructor(private _service: ApiService,
    private _shared: SharedService,
    private _router: Router) { }

  ngOnInit(): void {
    this.departments = this._shared.getDepartments();
    this.totalRecords = this.departments.length;
  }

  headers() {
    const _headers = new HttpHeaders({
      'accept': 'application/json',
      'apiKey': this._service.apiKey,
    });

    const httpOptions = {
      headers: _headers,
    }

    return httpOptions;

  }

  // getDepatments() {
    
    // this._service.getApi('client/departments').subscribe(data => {
    //   console.log(data)
    //   this.departments = data;
    //   this.totalRecords = this.departments.length;
    //   const depDevices: Devices[][] = []
    //   this.departments.forEach(department => {
    //     depDevices.push(department.devices)
    //   });
    //   this._shared.setAllDevices(depDevices);
    // })

  // }

  manageDevices(departmentName: string) {
    for (let i = 0; i < this.departments.length; i++) {
      const department = this.departments[i];
      if (department.name === departmentName) {
        this._shared.setDepartmentDetails(department);
        this._router.navigate(['department-details']);
      }

    }



  }

  departmentDetails(name: string){

  }

}
