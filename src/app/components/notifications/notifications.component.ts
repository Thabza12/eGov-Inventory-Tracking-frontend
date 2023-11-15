import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DailogData{
  when_in: string;
  when_out: string;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit{

  notificationForm = new UntypedFormGroup({});

  constructor(public dialogRef: MatDialogRef<NotificationsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DailogData,
    private _fb: FormBuilder){}

  ngOnInit(): void {

    this.notificationForm = this._fb.group({
      'when_in': new UntypedFormControl(this.data.when_in),
      'when_out': new UntypedFormControl(this.data.when_out)
    });
    
  }

  cancel(){
    this.dialogRef.close();
  }

  onSubmit(form: UntypedFormGroup){
    console.log(form.value);
    this.dialogRef.close(form.value)
  }

}
