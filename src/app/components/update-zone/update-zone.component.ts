import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-update-zone',
  templateUrl: './update-zone.component.html',
  styleUrls: ['./update-zone.component.css']
})

export class UpdateZoneComponent implements OnInit {

  updateZoneForm = new UntypedFormGroup({});
  zoneDetails!: any[];
  sizes: any[] = ['Small', 'Medium', 'Large'];
  devices: any[] = [];
  selectedDevices: any;
  selectedActions: any;
  radiusValue: any;
  color = "#000000";
  totalRecords!: any;
  page: number = 1;
  selectedRows = new Set<any>();


  constructor(private _fb: FormBuilder,
    private _shared: SharedService) { }

  ngOnInit(): void {

    this.zoneDetails = this._shared.getZonesDetails();

    this.updateZoneForm = this._fb.group({
      'name': new UntypedFormControl(this.zoneDetails[0].name),
      'lat': new UntypedFormControl(this.zoneDetails[0].lat),
      'lng': new UntypedFormControl(this.zoneDetails[0].lng),
      'radius': new UntypedFormControl(this.zoneDetails[0].radius),
      'devices': new UntypedFormControl(this.zoneDetails[0].devices),
      'actions': new UntypedFormControl(this.zoneDetails[0].actions),
      'notifications': new UntypedFormControl(this.zoneDetails[0].notifications)

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
