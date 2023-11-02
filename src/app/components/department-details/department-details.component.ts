import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Departments } from 'src/app/classes/departments';
import { Devices } from 'src/app/classes/devices';
import { LoanedDevices } from 'src/app/classes/loaned-devices';
import { MissingDevices } from 'src/app/classes/missing-devices';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  departments: Departments[] = [];
  loanedDevices: LoanedDevices[] = [];
  missingDevices: MissingDevices[] = [];

  loanedData!: any;
  notLoaned!: any;
  missing!: any;
  notMissingDevices!: any;
  barChartData!: any;
  xAxisLabelBar = 'Metric Name';
  yAxisLabelBar = 'Value';
  view: [number, number] = [900, 300];
  viewsView: [number, number] = [250, 250];
  barView: [number, number] = [700, 400];
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  gradient = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showXAxis = true;
  showYAxis = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Timestamp';
  yAxisLabel: string = 'Value';
  timeline: boolean = true;
  cardColor: string = '#0000ff';
  colorScheme: Color = {
    name: 'lineGraph',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#0000ff']
  };

  constructor(private _service: ApiService,
    private _shared: SharedService,
    private _router: Router) { }

  ngOnInit(): void {
    this.getDepatmentDetails();
    // this.barData();
  }

  getDepatmentDetails() {
    this.departments = this._shared.getDepartmentDetails()
    this.graphs(this.departments);
    this.setDevices(this.departments);
    // const depDevices: Devices[][] = []
    // this.departments.forEach(department => {
    //   depDevices.push(department.devices)
    // });
    // this._shared.setAllDevices(depDevices);

  }

  export() {

  }

  setDevices(data: any){
    const devices = data.devices;
    this._shared.setDevices(devices);
    console.log(devices);

  }

  devices() {
    this._router.navigate(['devices'])
  }

  graphs(data: any) {
    // console.log(data.stats)
    const loaned_devices = data.stats.loaned_devices;
    const missing_devices = data.stats.missing_devices;

    const loanedStats: LoanedDevices[] = [];
    const missingStats: MissingDevices[] = []

    if (loaned_devices !== undefined && loaned_devices !== null) {
      loanedStats.push(loaned_devices);
    }
    if (missing_devices !== undefined && missing_devices !== null) {
      missingStats.push(missing_devices);
    }

    let missing = 0
    let notMissing = 0
    for (let i = 0; i < missingStats.length; i++) {
      const element = missingStats[i];
      if (element !== undefined) {
        missing += element.missing;
        notMissing += element.not_missing
      }

    }

    const missingObj = [{
      name: 'Not Missing',
      value: missing
    }]

    const notMissingObj = [{
      name: 'Missing',
      value: notMissing
    }]

    this.missing = missingObj;
    this.notMissingDevices = notMissingObj;

    let totalLoaned = 0
    let totalNotLoaned = 0
    for (let i = 0; i < loanedStats.length; i++) {
      const element = loanedStats[i];
      if (element !== undefined) {
        // console.log(element);
        totalLoaned += element.loaned;
        totalNotLoaned += element.not_loaned
      }
    }

    const loanedObj = [{
      name: 'Loaned',
      value: totalLoaned
    }];
    // gufykfyf
    const notLoaned = [{
      name: 'Not Loaned',
      value: totalNotLoaned
    }];

    // console.log(loanedObj, notLoaned);
    this.loanedData = loanedObj;
    // console.log(this.loanedData);
    this.notLoaned = notLoaned;
    // console.log(this.notLoaned);
    this.barChartData = [missingObj[0], notMissingObj[0], loanedObj[0], notLoaned[0]]
    console.log(this.barChartData);

  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
