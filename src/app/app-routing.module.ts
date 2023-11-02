import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DevicesComponent } from './components/devices/devices.component';
import { AutomationsComponent } from './components/automations/automations.component';
import { ControlZonesComponent } from './components/control-zones/control-zones.component';
import { CreateZoneComponent } from './components/create-zone/create-zone.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { ZoneDetailsComponent } from './components/zone-details/zone-details.component';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';
import { AllDevicesComponent } from './components/all-devices/all-devices.component';
import { CreateAutomationComponent } from './components/create-automation/create-automation.component';
import { AllDevicesDetailsComponent } from './components/all-devices-details/all-devices-details.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'departments', component: DepartmentsComponent},
  {path: 'devices', component: DevicesComponent},
  {path: 'map', component: MapComponent},
  {path: 'device-management', component: AllDevicesDetailsComponent},
  {path: 'all-devices', component: AllDevicesComponent},
  {path: 'create-automation', component: CreateAutomationComponent},
  {path: 'department-details', component: DepartmentDetailsComponent},
  {path: 'device-details', component: DeviceDetailsComponent},
  {path: 'zone-details', component: ZoneDetailsComponent},
  {path: 'automations', component: AutomationsComponent},
  {path: 'control-zones', component: ControlZonesComponent},
  {path: 'create-zone', component: CreateZoneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
