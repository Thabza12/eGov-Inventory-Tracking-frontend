import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'InventoryTrackingSystem';

  public loggedIn: boolean = false;

  constructor(private _service: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
    this._service.authStatus.subscribe(value =>{
      this.loggedIn = value
    });
    // this._router.navigate(['/assets']);
  }

  assets(){
    this._router.navigate(['/assets']);
  }

  allDevices(){
    this._router.navigate(['/all-devices']);
  }

  automations(){
    this._router.navigate(['/automations']);
  }

  departments(){
    this._router.navigate(['/departments']);
  }

  theMap(){
    this._router.navigate(['/map']);
  }

  controlZones(){
    this._router.navigate(['/control-zones']);
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this._service.removeToken();
    this._service.changeAuthStatus(false);
    this._router.navigate(['/login']);
  }


}
