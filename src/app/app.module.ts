import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DevicesComponent } from './components/devices/devices.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartmentsComponent } from './components/departments/departments.component';
import { ControlZonesComponent } from './components/control-zones/control-zones.component';
import { AutomationsComponent } from './components/automations/automations.component';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderFooterComponent } from './components/header-footer/header-footer.component';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { CreateZoneComponent } from './components/create-zone/create-zone.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ZoneDetailsComponent } from './components/zone-details/zone-details.component';
import { DeviceCardComponent } from './components/device-card/device-card.component';
import { DepartmentCardComponent } from './components/department-card/department-card.component';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';
import { AllDevicesComponent } from './components/all-devices/all-devices.component';
import { AllDevicesCardComponent } from './components/all-devices-card/all-devices-card.component';
import { CreateAutomationComponent } from './components/create-automation/create-automation.component';
import { AllDevicesDetailsComponent } from './components/all-devices-details/all-devices-details.component';
import { UpdateZoneComponent } from './components/update-zone/update-zone.component';
import { MapComponent } from './components/map/map.component';
import { TheMapComponent } from './components/the-map/the-map.component';
import { AutomationDetailsComponent } from './components/automation-details/automation-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    DepartmentsComponent,
    ControlZonesComponent,
    AutomationsComponent,
    HeaderFooterComponent,
    DeviceDetailsComponent,
    CreateZoneComponent,
    DashboardComponent,
    ZoneDetailsComponent,
    DeviceCardComponent,
    DepartmentCardComponent,
    DepartmentDetailsComponent,
    AllDevicesComponent,
    AllDevicesCardComponent,
    CreateAutomationComponent,
    AllDevicesDetailsComponent,
    UpdateZoneComponent,
    MapComponent,
    TheMapComponent,
    AutomationDetailsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDividerModule,
    MatTreeModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    NgxChartsModule,
    MatPaginatorModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
