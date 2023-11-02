import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Actions } from 'src/app/classes/actions';
import { Devices } from 'src/app/classes/devices';
import { Notifications } from 'src/app/classes/notifications';
import { DailogData } from '../zone-details/zone-details.component';
import { FormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

export interface UpdateZoneData {

  id: string,
  name: string,
  lat: any,
  lng: any
  radius: number,
  color: any,
  devices: Devices,
  actions: Actions,
  notifications: Notifications

}

@Component({
  selector: 'app-update-zone',
  templateUrl: './update-zone.component.html',
  styleUrls: ['./update-zone.component.css']
})

export class UpdateZoneComponent implements OnInit {

  updateZoneForm = new UntypedFormGroup({});
  sizes: any[] = ['Small', 'Medium', 'Large'];
  devices: any[] = [];
  selectedDevices: any;
  selectedActions: any;
  radiusValue: any;
  color = "#000000";
  totalRecords!: any;
  page: number = 1;
  selectedRows = new Set<any>();


  constructor(public dialogRef: MatDialogRef<UpdateZoneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UpdateZoneData,
    private _fb: FormBuilder,
    private _shared: SharedService) { }

  ngOnInit(): void {

    this.dialogRef.disableClose = false;

    // this.devices = this._shared.getZonesDetails();

    this.updateZoneForm = this._fb.group({
      'name': new UntypedFormControl(this.data.name),
      'lat': new UntypedFormControl(this.data.lat),
      'lng': new UntypedFormControl(this.data.lng),
      'radius': new UntypedFormControl(this.data.radius),
      'devices': new UntypedFormControl(this.data.devices),
      'actions': new UntypedFormControl(this.data.actions),
      'notifications': new UntypedFormControl(this.data.notifications)
      // 'plan': new UntypedFormControl(this.data.plan),
      // 'premiumAmount': new UntypedFormControl(this.data.premiumAmount)

    });
  }

  onSubmit(form: UntypedFormGroup){

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
