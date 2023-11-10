import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

export interface DailogData {
  id: any;
}

@Component({
  selector: 'app-arlet-message',
  templateUrl: './arlet-message.component.html',
  styleUrls: ['./arlet-message.component.css']
})
export class ArletMessageComponent implements OnInit {


  arletMessageForm = new UntypedFormGroup({});

  constructor(private _service: ApiService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ArletMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DailogData){}



  ngOnInit(): void {
    this.arletMessageForm = new UntypedFormGroup({
      'message': new UntypedFormControl()
    })
    
  }

  onSubmit(form: UntypedFormGroup){

    const body = {
      command: 'start',
      action_name: 'alert',
      options: {
        close_apps: 'true',
        alert_message: form.value.message
      }
    }

    console.log(this.data.id)
    this._service.putApiKot(`device/${this.data.id}/message`, body).subscribe(data =>{
      console.log(data);
    })
    this.dialogRef.close(body)

    

  }

  cancel(): void{
    this.dialogRef.close();
  }

}
