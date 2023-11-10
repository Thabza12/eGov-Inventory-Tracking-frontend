import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

export interface DailogData {
  id: any;
}

@Component({
  selector: 'app-lock-device',
  templateUrl: './lock-device.component.html',
  styleUrls: ['./lock-device.component.css']
})
export class LockDeviceComponent implements OnInit {

  lockDeviceForm = new UntypedFormGroup({});

  constructor(private _service: ApiService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<LockDeviceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DailogData){}



  ngOnInit(): void {
    this.lockDeviceForm = new UntypedFormGroup({
      'command': new UntypedFormControl(),
      'password': new UntypedFormControl(),
    })
    
  }

  onSubmit(form: UntypedFormGroup){

    const body = {
      command: form.value.command,
      action_name: 'lock',
      options: {
        close_apps: 'true',
        unlock_pass: form.value.password
      }
    }

    console.log(this.data.id)
    this._service.putApiKot(`device/${this.data.id}/lock`, body).subscribe(data =>{
      console.log(data);
    })
    this.dialogRef.close(body)

    

  }

  cancel(): void{
    this.dialogRef.close();
  }

}
