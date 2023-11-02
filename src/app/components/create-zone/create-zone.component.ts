import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ZoneDevices } from 'src/app/classes/zone-devices';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-create-zone',
  templateUrl: './create-zone.component.html',
  styleUrls: ['./create-zone.component.css']
})
export class CreateZoneComponent implements OnInit{


  zoneForm = new UntypedFormGroup({});
  sizes: any[] = ['Small', 'Medium', 'Large'];
  devices: any[] = [];
  selectedDevices: any;
  selectedActions: any;
  radiusValue: any;
  color = "#000000";
  totalRecords!: any;
  page: number = 1;
  selectedRows = new Set<any>();

  constructor(private _service: ApiService,
    private _shared: SharedService){}

  ngOnInit(): void {

    this.devices = this._shared.getZonesDetails()
    console.log('devices', this.devices);

    this.zoneForm = new UntypedFormGroup({
      'name': new UntypedFormControl(),
      'lat': new UntypedFormControl(),
      'lng': new UntypedFormControl(),
      'radius': new UntypedFormControl(),
      'color': new UntypedFormControl(),
      'devices': new UntypedFormControl(),
      'actions': new UntypedFormControl(),
      'notifications': new UntypedFormControl(),
    })
   
  }

  onSubmit(form: UntypedFormGroup){
    const body = {
      name: form.value.name,
      lat: form.value.lat,
      lng: form.value.lng,
      radius: form.value.radius,
      color: this.color,
      devices: this.selectedDevices,
      actions: this.selectedActions,
      notification: form.value.notification
    }

    console.log(body);

      this._service.postApi('url/to/post/zone-form', body).subscribe(data =>{
        console.log(data)
      })


  }

  formatLabel(value: number): string{
    if (value >= 10000000) {
      this.radiusValue = Math.round(value / 1000000) + ' sq km';
      console.log(this.radiusValue)
    }
    this.radiusValue = value;
    console.log(this.radiusValue)

    return `${value}`;
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
