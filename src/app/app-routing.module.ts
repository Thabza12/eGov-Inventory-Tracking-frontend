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
import { isAuthenticatedGuard } from './auth-gaurd/is-authenticated.guard';
// import { SideNavComponent } from './components/side-nav/side-nav.component';

const routes: Routes = [
  {path: 'assets', component: DashboardComponent, canActivate: [isAuthenticatedGuard]},
  // {path: 'side-nav', component: SideNavComponent},
  {path: 'departments', component: DepartmentsComponent, canActivate: [isAuthenticatedGuard]},
  {path: 'devices', component: DevicesComponent, canActivate: [isAuthenticatedGuard]},
  {path: 'map', component: MapComponent, canActivate: [isAuthenticatedGuard]},
  {path: 'update-zone', component: UpdateZoneComponent, canActivate: [isAuthenticatedGuard]},
  {path: 'device-management', component: AllDevicesDetailsComponent, canActivate: [isAuthenticatedGuard]},
  {path: 'all-devices', component: AllDevicesComponent, canActivate: [isAuthenticatedGuard]},
  {path: 'create-automation', component: CreateAutomationComponent, canActivate: [isAuthenticatedGuard]},
  {path: 'department-details', component: DepartmentDetailsComponent, canActivate: [isAuthenticatedGuard]},
  {path: 'device-details', component: DeviceDetailsComponent, canActivate: [isAuthenticatedGuard]},
  {path: 'zone-details', component: ZoneDetailsComponent, canActivate: [isAuthenticatedGuard]},
  {path: 'automations', component: AutomationsComponent, canActivate: [isAuthenticatedGuard]},
  {path: 'control-zones', component: ControlZonesComponent, canActivate: [isAuthenticatedGuard]},
  {path: 'create-zone', component: CreateZoneComponent, canActivate: [isAuthenticatedGuard]},
  {path: 'map',component:TheMapComponent, canActivate: [isAuthenticatedGuard]},
  {path: 'automation-details',component:AutomationDetailsComponent, canActivate: [isAuthenticatedGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
