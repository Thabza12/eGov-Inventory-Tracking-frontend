import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DailogData } from '../automation-details/automation-details.component';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  actionsForm = new UntypedFormGroup({});
  items: any[] = ['when_in', 'when_out'];
  selectedContext: any;
  alarm = true
  alert = true
  lock = true
  missing = true
  action_name: any;
  sound: any;
  message: any;
  password: any;
  frequency: any;
  context: any;


  constructor(public dialogRef: MatDialogRef<ActionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DailogData,
    private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.dialogRef.disableClose = false;

    // this.actionsForm = this._fb.group({
    //   'sound': new UntypedFormControl(),
    //   'message': new UntypedFormControl(),
    //   'password': new UntypedFormControl(),
    // });

  }

  alarmButton() {
    this.alarm = false
    this.action_name = 'alarm'
  }

  alertButton() {
    this.alert = false
    this.action_name = 'alert'
  }

  lockButton() {
    this.lock = false
    this.action_name = 'lock'
  }

  missingButton() {
    this.missing = false
    this.action_name = 'missing'
  }


  cancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    const actArr = []
    if (this.action_name == 'alarm') {
      const body = {
        command: 'start',
        action_name: 'alarm',
        options: {
          close_apps: 'true',
          sound: this.sound
        },
        
        context: this.selectedContext
      }

      console.log(body);
      actArr.push(body)

    } else if (this.action_name == 'alert') {
      const body = {
        command: 'start',
        action_name: 'alert',
        options: {
          close_apps: 'true',
          alert_message: this.message
        },
        context: this.selectedContext
      }

      console.log(body);
      actArr.push(body)

    } else if (this.action_name == 'lock') {
      const body = {
        command: 'start',
        action_name: 'lock',
        options: {
          close_apps: 'true',
          unlock_pass: this.password
        },
        context: this.selectedContext
      }

      console.log(body);
      actArr.push(body)

    } else if (this.action_name == 'missing') {
      const body = {
        missing: true,
        options: {
          report_frequency: this.frequency
        },
        context: this.selectedContext
      }

      console.log(body);
      actArr.push(body)

    }
    
    this.dialogRef.close(actArr[0])
  }

}
