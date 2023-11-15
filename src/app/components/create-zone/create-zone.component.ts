import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Notifications } from 'src/app/classes/notifications';
import { ZoneDevices } from 'src/app/classes/zone-devices';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';
import { SnackbarService } from 'src/app/shared/snackbar.service';
import { NotificationsComponent } from '../notifications/notifications.component';
import { ActionsComponent } from '../actions/actions.component';

@Component({
  selector: 'app-create-zone',
  templateUrl: './create-zone.component.html',
  styleUrls: ['./create-zone.component.css']
})
export class CreateZoneComponent implements OnInit {


  zoneForm = new UntypedFormGroup({});
  sizes: any[] = ['Small', 'Medium', 'Large'];
  devices: any[] = [];
  selectedDevices: any;
  selectedSize: any;
  page_size: number = 10;
  color = "#000000";
  totalRecords!: any;
  page: number = 1;
  selectedRows = new Set<any>();
  notification: Notifications = new Notifications();
  notifications: Notifications[] = [];
  actions: any[] = []

  constructor(private _service: ApiService,
    private _shared: SharedService,
    private http: HttpClient,
    private _snackbar: SnackbarService,
    private _formBuilder: UntypedFormBuilder,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    const params = new HttpParams().set('page', this.page).set('page_size', this.page_size);
    this.http.get('http://localhost:8081/all', { params }).subscribe((data: any) => {
      this.devices = data
      console.log('devices', this.devices);
    }, error => {
      // console.log(error);
      this._snackbar.openSnackbar("Error loading server, please try again later", error);
    });

    this.zoneForm = new UntypedFormGroup({
      'name': new UntypedFormControl(),
      'address': new UntypedFormControl(),
      'radius': new UntypedFormControl(),
      'color': new UntypedFormControl(),
    })

  }

  onSubmit(form: UntypedFormGroup) {

    this._service.geocodeAddress(form.value.address).subscribe(data => {
      if (data.features.length > 0) {
        const location = data.features[0].center;

        const body = {
          name: form.value.name,
          lat: location[1],
          lng: location[0],
          radiusSize: this.selectedSize,
          radius: form.value.radius,
          color: this.color,
          devices: this.selectedRows,
          actions: this.actions,
          notification: this.notifications
        }

        console.log(body);

        this._service.postApi('url/to/post/zone-form', body).subscribe(data => {
          console.log(data)
        })
      };
    })
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = false;

    dialogConfig.data = this._formBuilder.group({
      when_in: this.notification.when_in,
      when_out: this.notification.when_out
    })

    const dialogRef = this.dialog.open(NotificationsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      console.log("Dialog output: ", data)

      let results: Notifications = new Notifications();
      results = data
      this.notifications.push(results);

    });

  }

  actionDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = false;

    const dialogRef = this.dialog.open(ActionsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      console.log("Dialog output: ", data)

      let results: any
      results = data
      this.actions.push(results);

    });

  }

  // formatLabel(value: number): string {
  //   if (value >= 10000000) {
  //     this.radiusValue = Math.round(value / 1000000) + ' sq km';
  //     console.log(this.radiusValue)
  //   }
  //   this.radiusValue = value;
  //   console.log(this.radiusValue)

  //   return `${value}`;
  // }

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
