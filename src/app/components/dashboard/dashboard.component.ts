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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  departments: Departments[] = [];
  // loanedDevices: LoanedDevices[] = [];
  // missingDevices: MissingDevices[] = [];

  // loanedData!: any;
  // notLoaned!: any;
  // missing!: any;
  // notMissingDevices!: any;
  // barChartData!: any;
  // xAxisLabelBar = 'Metric Name';
  // yAxisLabelBar = 'Value';
  // view: [number, number] = [900, 300];
  // viewsView: [number, number] = [250, 250];
  // barView: [number, number] = [700, 400];
  // legend: boolean = true;
  // showLabels: boolean = true;
  // animations: boolean = true;
  // gradient = false;
  // xAxis: boolean = true;
  // yAxis: boolean = true;
  // showXAxis = true;
  // showYAxis = true;
  // showYAxisLabel: boolean = true;
  // showXAxisLabel: boolean = true;
  // xAxisLabel: string = 'Timestamp';
  // yAxisLabel: string = 'Value';
  // timeline: boolean = true;
  // cardColor: string = '#0000ff';
  // colorScheme: Color = {
  //   name: 'lineGraph',
  //   selectable: true,
  //   group: ScaleType.Ordinal,
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#0000ff']
  // };

  constructor(private _service: ApiService,
    private _shared: SharedService,
    private _router: Router) { }

  ngOnInit(): void {
    // this.getDepatments();
    // this.barData();
  }

  // department(){
  //   console.log('department clicked')


  // }

  department() {
    this._service.getApi('client/departments').subscribe(data => {
      console.log(data)
      this.departments = data;
      // this.loanedDevices = this.de
      // this.numberCards(data);
      // this.barGraph(data);
      this._shared.setDepartments(this.departments);
      const depDevices: Devices[][] = []
      this.departments.forEach(department => {
        depDevices.push(department.devices)
      });
      this._shared.setAllDevices(depDevices);
      this._router.navigate(['departments']);
    })



  }

//   numberCards(data: any) {
//     const loaned_devices = data[0].stats.loaned_devices;
//     const missing_devices = data[0].stats.missing_devices;
    
//     const loanedStats: LoanedDevices[] = [];
//     const missingStats: MissingDevices[] = []

//     this.departments.forEach(department => {
//       if (loaned_devices !== undefined && loaned_devices !== null) {
//         loanedStats.push(department.stats.loaned_devices);
//       }
//       if (missing_devices !== undefined && missing_devices !== null) {
//         missingStats.push(department.stats.missing_devices);
//       }

//     });

//     let missing = 0
//     let notMissing = 0
//     for (let i = 0; i < missingStats.length; i++) {
//       const element = missingStats[i];
//       if (element !== undefined) {
//         missing += element.missing;
//         notMissing += element.not_missing
//       }
      
//     }

//     const missingObj = [{
//       name: 'Not Missing',
//       value: missing
//     }]

//     const notMissingObj = [{
//       name: 'Missing',
//       value: notMissing
//     }]

//     this.missing = missingObj;
//     this.notMissingDevices = notMissingObj;

//     let totalLoaned = 0
//     let totalNotLoaned = 0
//     for (let i = 0; i < loanedStats.length; i++) {
//       const element = loanedStats[i];
//       if (element !== undefined) {
//         // console.log(element);
//         totalLoaned += element.loaned;
//         totalNotLoaned += element.not_loaned
//       }
//     }

//     const loanedObj = [{
//       name: 'Loaned',
//       value: totalLoaned
//     }];
// // gufykfyf
//     const notLoaned = [{
//       name: 'Not Loaned',
//       value: totalNotLoaned
//     }];

//     // console.log(loanedObj, notLoaned);
//     this.loanedData = loanedObj;
//     // console.log(this.loanedData);
//     this.notLoaned = notLoaned;
//     // console.log(this.notLoaned);
//     this.barChartData = [missingObj[0], notMissingObj[0], loanedObj[0], notLoaned[0]]
//     console.log(this.barChartData);

//   }

//   barGraph(data: any){

//   }

//   onSelect(data: any): void {
//     console.log('Item clicked', JSON.parse(JSON.stringify(data)));
//   }

//   onActivate(data: any): void {
//     console.log('Activate', JSON.parse(JSON.stringify(data)));
//   }

//   onDeactivate(data: any): void {
//     console.log('Deactivate', JSON.parse(JSON.stringify(data)));
//   }

}
