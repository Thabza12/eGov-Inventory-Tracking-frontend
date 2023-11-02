import { Injectable } from '@angular/core';
import { Devices } from '../classes/devices';
import { Departments } from '../classes/departments';
import { Zones } from '../classes/zones';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  departmentDevices: Devices[] = [];
  allDevices!: any[];
  departments: Departments[] = [];
  zone: Zones[] = [];
  departmentDetails: Departments[] = []
  deviceDetails: Devices[] = [];

  constructor() { }


  setDevices(devices: any){
    this.departmentDevices = devices;
  }

  getDevices(){
    return this.departmentDevices;
  }

  setAllDevices(depDevices: any){
    this.allDevices = depDevices[0];
  }

  getAllDevices(){
    return this.allDevices;
  }

  setDepartments(data: any){
    this.departments = data;
  }

  getDepartments(){
    return this.departments;
  }

  setZoneDetails(data: any){
    this.zone = data;
  }

  getZonesDetails(){
    return this.zone;
  }

  setDepartmentDetails(data: any){
    this.departmentDetails = data;
  }

  getDepartmentDetails(){
    return this.departmentDetails;
  }

  setDeviceDetails(data: any){
    this.deviceDetails = data;
  }

  getDeviceDetails(){
    return this.deviceDetails;
  }

  
}
