import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.css']
})
export class HeaderFooterComponent {

  constructor(private _shared: SharedService,
    private _service: ApiService,
    private _router: Router){}

  allDevices(){
    this._service.getApi('/path/to/get/devices').subscribe(data =>{
      console.log(data)
      this._shared.setAllDevices(data);
      this._router.navigate(['all-devices']);
    })

  }

}
