import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { Departments } from 'src/app/classes/departments';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-create-automation',
  templateUrl: './create-automation.component.html',
  styleUrls: ['./create-automation.component.css']
})
export class CreateAutomationComponent implements OnInit{
  

  automationForm = new UntypedFormGroup({});
  events: any[] = ['Exact Time', 'Repeat Time', 'Low Battery', 'Hardware Changes', 'Stop Charging', 'Start Charging', 'Device not connected to Prey'];
  actions: any[] = ['Alert Message', 'Remote Alarm', 'Screen Lock', 'Mark as missing'];
  selectedEvent: any;
  selectedAction: any;
  selectedRows = new Set<any>();
  devices: any[] = [];
  departments: Departments[] = [];
  totalRecords!: any;
  page: number = 1;

  constructor(private _service: ApiService,
    private _shared: SharedService){}

  ngOnInit(): void {

    this.devices = this._shared.getAllDevices();
    console.log(this.devices);

    this.automationForm = new UntypedFormGroup({
      'automation_name': new UntypedFormControl(),
      'select_event': new UntypedFormControl(),
      'select_action': new UntypedFormControl(),
      'assign_devices': new UntypedFormControl(),
    })
  }

  onSubmit(form: UntypedFormGroup){  

    if (this.selectedAction !== null && this.selectedEvent !== null) {
      const postBody = {
        automation_name: form.value.automation_name,
        select_event: this.selectedEvent,
        select_action: this.selectedAction,
        assign_devices: this.selectedRows,
      }

      console.log(postBody);

      this._service.postApi('url/to/post/auto-form', postBody).subscribe(data =>{
        console.log(data)
      })


      
    }

    

  }


  selectRow(row: any) {
    if (this.selectedRows.has(row)) {
      this.selectedRows.delete(row);
    } else {
      this.selectedRows.add(row);
    }
  }

  selectAll(event: any) {
    if (event.checked) {
      this.devices.forEach(row => this.selectedRows.add(row));
    } else {
      this.selectedRows.clear();
    }
  }

}
