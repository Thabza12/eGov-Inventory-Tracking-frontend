import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Automations } from 'src/app/classes/automations';
import { Departments } from 'src/app/classes/departments';
import { Devices } from 'src/app/classes/devices';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';
import { HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
import { AutomationDevices } from 'src/app/classes/automation-devices';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AutomationDetailsComponent } from '../automation-details/automation-details.component';
import { SnackbarService } from 'src/app/shared/snackbar.service';

@Component({
  selector: 'app-automations',
  templateUrl: './automations.component.html',
  styleUrls: ['./automations.component.css']
})
export class AutomationsComponent implements OnInit {

  automationsData = [
    {
      "id": "c20e4e",
      "name": "TGIF",
      "state": "active",
      "timezone": "America/Santiago",
      "automation_events": [
        {
          "type": "repeat_time",
          "info": {
            "hour": "16",
            "minute": "00",
            "second": "00",
            "until": "20201231",
            "days_of_week": "[5]"
          }
        }
      ],
      "automation_actions": [
        {
          "action": {
            "command": "start",
            "target": "alert",
            "options": {
              "alert_message": "Thank God Is Friday!"
            }
          }
        }
      ],
      "automation_devices": [
        {
          "device": {
            "id": "033340",
            "name": "Yoda Scorpius",
            "links": [
              {
                "rel": "device",
                "href": "https://api.preyproject.com/v1/devices/033340"
              }
            ]
          },
          "state": "waiting"
        },
        {
          "device": {
            "id": "6290cb",
            "name": "Yoda Loe",
            "links": [
              {
                "rel": "device",
                "href": "https://api.preyproject.com/v1/devices/6290cb"
              }
            ]
          },
          "state": "waiting"
        },
        {
          "device": {
            "id": "862816",
            "name": "Lando Calrissian Pisces",
            "links": [
              {
                "rel": "device",
                "href": "https://api.preyproject.com/v1/devices/862816"
              }
            ]
          },
          "state": "waiting"
        },
        {
          "device": {
            "id": "957585",
            "name": "Lando Calrissian Aries",
            "links": [
              {
                "rel": "device",
                "href": "https://api.preyproject.com/v1/devices/957585"
              }
            ]
          },
          "state": "waiting"
        },
        {
          "device": {
            "id": "f61a2a",
            "name": "Yoda Orion",
            "links": [
              {
                "rel": "device",
                "href": "https://api.preyproject.com/v1/devices/f61a2a"
              }
            ]
          },
          "state": "waiting"
        }
      ]
    },
    {
      "id": "f5360b",
      "name": "Daily!",
      "state": "active",
      "timezone": "America/Santiago",
      "automation_events": [
        {
          "type": "repeat_time",
          "info": {
            "hour": "10",
            "minute": "00",
            "second": "00",
            "until": "20201231",
            "days_of_week": "[1,2,3,4,5]"
          }
        }
      ],
      "automation_actions": [
        {
          "action": {
            "command": "start",
            "target": "alarm",
            "options": {
              "sound": "alarm"
            }
          }
        }
      ],
      "automation_devices": [
        {
          "device": {
            "id": "4d2931",
            "name": "Jar Jar Binks Aries",
            "links": [
              {
                "rel": "device",
                "href": "https://api.preyproject.com/v1/devices/4d2931"
              }
            ]
          },
          "state": "waiting"
        },
        {
          "device": {
            "id": "d0945c",
            "name": "Jar Jar Binks Sagittarius",
            "links": [
              {
                "rel": "device",
                "href": "https://api.preyproject.com/v1/devices/d0945c"
              }
            ]
          },
          "state": "waiting"
        },
        {
          "device": {
            "id": "fa1390",
            "name": "Jar Jar Binks Sagittarius",
            "links": [
              {
                "rel": "device",
                "href": "https://api.preyproject.com/v1/devices/fa1390"
              }
            ]
          },
          "state": "waiting"
        },
        {
          "device": {
            "id": "468ea3",
            "name": "Jar Jar Binks Virgo",
            "links": [
              {
                "rel": "device",
                "href": "https://api.preyproject.com/v1/devices/468ea3"
              }
            ]
          },
          "state": "waiting"
        },
        {
          "device": {
            "id": "9b57a8",
            "name": "Jar Jar Binks Pisces",
            "links": [
              {
                "rel": "device",
                "href": "https://api.preyproject.com/v1/devices/9b57a8"
              }
            ]
          },
          "state": "waiting"
        },
        {
          "device": {
            "id": "51a893",
            "name": "Chewbacca Libra",
            "links": [
              {
                "rel": "device",
                "href": "https://api.preyproject.com/v1/devices/51a893"
              }
            ]
          },
          "state": "waiting"
        },
        {
          "device": {
            "id": "3f853c",
            "name": "Chewbacca Canis Minor",
            "links": [
              {
                "rel": "device",
                "href": "https://api.preyproject.com/v1/devices/3f853c"
              }
            ]
          },
          "state": "waiting"
        },
        {
          "device": {
            "id": "1814c2",
            "name": "Obi-Wan Kenobi Litte Dipper",
            "links": [
              {
                "rel": "device",
                "href": "https://api.preyproject.com/v1/devices/1814c2"
              }
            ]
          },
          "state": "waiting"
        }
      ]
    }
  ]

  automations: Automations[] = [];
  totalRecords!: any;
  page: number = 1;
  page_size:number = 10;
  constructor(private _router: Router,
    private _snackbar: SnackbarService,
    private http:HttpClient,
    private _shared:SharedService,
    public dialog: MatDialog,) { }


  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    const params = new HttpParams().set('page',this.page).set('page_size',this.page_size);
    this.http.get('http://localhost:8081/Automations',{params}).subscribe((data:any)=>{
      this.automations= data;
    }, error =>{
      // console.log(error);
      this._snackbar.openSnackbar("Error loading server, please try again later", error);
    });
  }
  changePage(pg:number){
    this.page+=pg;
    this.loadData();
  }

  automationDetails(name: string) {
    this.automations.forEach(Auto => {
      if (name === Auto.name) {
        this._shared.setAutomationDetails([Auto])
        // this._router.navigate(['automation-details'])
        // console.log(name)
        console.log(Auto)

        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = false;

        dialogConfig.data = {
          name: name
        }

        const dialogRef = this.dialog.open(AutomationDetailsComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(data =>{
          console.log("dialog closed", data);
        })

      }
    });
  }
  

  createAutomation() {
    this._router.navigate(['create-automation']);

  }




}
