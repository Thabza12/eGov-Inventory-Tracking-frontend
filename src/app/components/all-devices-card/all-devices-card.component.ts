import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-all-devices-card',
  templateUrl: './all-devices-card.component.html',
  styleUrls: ['./all-devices-card.component.css']
})
export class AllDevicesCardComponent {

  @Input() device: any;

  openDialog(name: string){

  }

  edit(name: string){

  }

  

}
