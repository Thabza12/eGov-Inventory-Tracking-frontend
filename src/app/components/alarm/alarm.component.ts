import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

export interface DailogData {
  id: any;
}

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements OnInit {


  alarmForm = new UntypedFormGroup({});

  constructor(private _service: ApiService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AlarmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DailogData){}



  ngOnInit(): void {
    this.alarmForm = new UntypedFormGroup({
      'sound': new UntypedFormControl()
    })
    
  }

  onSubmit(form: UntypedFormGroup){

    const body = {
      command: 'start',
      action_name: 'alarm',
      options: {
        close_apps: 'true',
        sound: form.value.sound
      }
    }

    console.log(this.data.id)
    this._service.putApiKot(`device/${this.data.id}/alarm`, body).subscribe(data =>{
      console.log(data);
    })
    this.dialogRef.close(body)

    

  }

  cancel(): void{
    this.dialogRef.close();
  }

}
