import { Component, NgModule } from '@angular/core';
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
import { UpdateZoneComponent } from './components/update-zone/update-zone.component';
import { TheMapComponent } from './components/the-map/the-map.component';
import { AutomationDetailsComponent } from './components/automation-details/automation-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: 'assets', component: DashboardComponent},
  {path: 'departments', component: DepartmentsComponent},
  {path: 'devices', component: DevicesComponent},
  {path: 'map', component: MapComponent},
  {path: 'update-zone', component: UpdateZoneComponent},
  {path: 'device-management', component: AllDevicesDetailsComponent},
  {path: 'all-devices', component: AllDevicesComponent},
  {path: 'create-automation', component: CreateAutomationComponent},
  {path: 'department-details', component: DepartmentDetailsComponent},
  {path: 'device-details', component: DeviceDetailsComponent},
  {path: 'zone-details', component: ZoneDetailsComponent},
  {path: 'automations', component: AutomationsComponent},
  {path: 'control-zones', component: ControlZonesComponent},
  {path: 'create-zone', component: CreateZoneComponent},
  {path: 'TheMap',component:TheMapComponent},
  {path: 'automation-details',component:AutomationDetailsComponent},
  {path:'',component:LoginComponent},
  {path:'Register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
