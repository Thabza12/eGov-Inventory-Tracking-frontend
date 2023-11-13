import { Component,Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AutomationActions } from 'src/app/classes/automation-actions';
import { AutomationDevices } from 'src/app/classes/automation-devices';
import { AutomationEvents } from 'src/app/classes/automation-events';
import { Automations } from 'src/app/classes/automations';
import { SharedService } from 'src/app/services/shared.service';

export interface DailogData {
  name: string;
}

@Component({
  selector: 'app-automation-details',
  templateUrl: './automation-details.component.html',
  styleUrls: ['./automation-details.component.css']
})
export class AutomationDetailsComponent implements OnInit{
  automation_devices:AutomationDevices[]=[];
  automation_events:AutomationEvents[]=[];
  automation_actions:AutomationActions[]=[];
  automation :Automations[]=[];
  totalRecords!: any;
  page: number = 1;

  constructor(private _shared:SharedService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AutomationDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DailogData){}


  ngOnInit(): void {
    this.automation = this._shared.getAutomationDetails();
    this.automationDevice(this._shared.getAutomationDetails());
    this.automationEvents(this._shared.getAutomationDetails());
    this.automationActions(this._shared.getAutomationDetails());
    
  }
  automationDevice(data: any) {
    if (data[0].automation_devices) {
      this.automation_devices = data[0].automation_devices;
      this.totalRecords = this.automation_devices.length;
      console.log('devices', data[0].automation_devices);
    }
  }
  automationEvents(data: any) {
    if (data[0].automation_events) {
      this.automation_events = data[0].automation_events;
      this.totalRecords = this.automation_events.length;
      console.log('Events', data[0].automation_events);
    }
  }
  automationActions(data: any) {
    if (data[0].automation_actions) {
      this.automation_actions = data[0].automation_actions;
      this.totalRecords = this.automation_actions.length;
      console.log('Actions', data[0].automation_actions);
    }
  }
  

}
