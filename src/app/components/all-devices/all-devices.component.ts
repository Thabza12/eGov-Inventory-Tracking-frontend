import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllDevices } from 'src/app/classes/all-devices';
import { SharedService } from 'src/app/services/shared.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ngxCsv } from "ngx-csv/ngx-csv";
import { flatMap } from 'rxjs';
import { StyleDictionary } from 'pdfmake/interfaces';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ApiService } from 'src/app/services/api.service';
import { SnackbarService } from 'src/app/shared/snackbar.service';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs

@Component({
  selector: 'app-all-devices',
  templateUrl: './all-devices.component.html',
  styleUrls: ['./all-devices.component.css']
})
export class AllDevicesComponent implements OnInit {

  devices = [
    {
      "id": "da541f",
      "missing": false,
      "name": "Leia Organa Libra",
      "os_details": {
        "os": "Android"
      },
      "type": "Phone",
      "client_outdated": false,
      "client_version": "1.9.4",
      "description": "Android Phone, 3.3 GHz",
      "logged_user": null,
      "network_status": {
        "last_known_ssid": null,
        "signal_strength": null
      },
      "user": {
        "email": "api@preyhq.com",
        "id": "cf6aea36bf7c",
        "links": [
          {
            "rel": "user",
            "href": "https://api.preyproject.com/v1/users/cf6aea36bf7c"
          }
        ]
      },
      "automations": [],
      "zones": [],
      "labels": [
        {
          "id": "9d59bf",
          "name": "ositolindo",
          "links": [
            {
              "rel": "label",
              "href": "https://api.preyproject.com/v1/labels/9d59bf"
            }
          ]
        }
      ],
      "reports_details": {
        "reports_count": 0,
        "unread_reports": 0
      },
      "device_details": {
        "hardware": [
          {
            "name": "system",
            "data": [
              {
                "bios_vendor": "American Megatrends Inc."
              },
              {
                "bios_version": "009933"
              },
              {
                "imei": "864088607383395"
              }
            ]
          },
          {
            "name": "cpu",
            "data": [
              {
                "cpu_model": "Intel(R) Core(TM) i7-6500U CPU @ 2.50GHz"
              },
              {
                "cpu_speed": 3300
              }
            ]
          },
          {
            "name": "ram",
            "data": [
              {
                "ram_size": 8000
              }
            ]
          },
          {
            "name": "network_interface",
            "data": [
              {
                "name": "eth0"
              },
              {
                "model": "Realtek 10baseT shit"
              },
              {
                "vendor": "Realtek Inc."
              },
              {
                "mac_address": "EA:BF:E6:78:2C:D3"
              },
              {
                "interface_type": "Wired"
              }
            ]
          }
        ],
        "mac_addresses": [
          {
            "name": "eth0",
            "model": "Realtek 10baseT shit",
            "vendor": "Realtek Inc.",
            "mac_address": "EA:BF:E6:78:2C:D3",
            "interface_type": "Wired"
          }
        ],
        "battery_status": {
          "percentage_remaining": null,
          "time_remaining": null,
          "uptime": null
        }
      },
      "loan_details": {
        "assigned_to": null,
        "state": null
      }
    },
    {
      "id": "351550",
      "missing": false,
      "name": "Count Dooku Big Dipper",
      "os_details": {
        "os": "Mac"
      },
      "type": "Laptop",
      "client_outdated": false,
      "client_version": "1.9.4",
      "description": "Apple MacBook, macOS",
      "logged_user": null,
      "network_status": {
        "last_known_ssid": null,
        "signal_strength": null
      },
      "user": {
        "email": "api@preyhq.com",
        "id": "cf6aea36bf7c",
        "links": [
          {
            "rel": "user",
            "href": "https://api.preyproject.com/v1/users/cf6aea36bf7c"
          }
        ]
      },
      "automations": [
        {
          "name": "Almuerzo Prey!",
          "id": "370590",
          "links": [
            {
              "rel": "automation",
              "href": "https://api.preyproject.com/v1/automations/370590"
            }
          ]
        }
      ],
      "zones": [
        {
          "name": "HQ",
          "id": "6205e5",
          "links": [
            {
              "rel": "zone",
              "href": "https://api.preyproject.com/v1/zones/6205e5"
            }
          ]
        }
      ],
      "labels": [
        {
          "id": "16f3d0",
          "name": "amigo javo",
          "links": [
            {
              "rel": "label",
              "href": "https://api.preyproject.com/v1/labels/16f3d0"
            }
          ]
        }
      ],
      "reports_details": {
        "reports_count": 0,
        "unread_reports": 0
      },
      "device_details": {
        "hardware": [
          {
            "name": "system",
            "data": [
              {
                "serial_number": "985693212474762"
              },
              {
                "uuid": "918185470281874"
              },
              {
                "bios_vendor": "Phoenix Technologies, LTD"
              },
              {
                "bios_version": "BBCC00"
              }
            ]
          },
          {
            "name": "cpu",
            "data": [
              {
                "cpu_model": "Intel(R) Core(TM) i7-6500U CPU @ 2.50GHz"
              },
              {
                "cpu_speed": 100
              }
            ]
          },
          {
            "name": "ram",
            "data": [
              {
                "ram_size": 1024
              }
            ]
          },
          {
            "name": "network_interface",
            "data": [
              {
                "name": "eth0"
              },
              {
                "model": "Realtek 10baseT shit"
              },
              {
                "vendor": "Realtek Inc."
              },
              {
                "mac_address": "71:86:9D:AA:96:DB"
              },
              {
                "interface_type": "Wired"
              }
            ]
          }
        ],
        "mac_addresses": [
          {
            "name": "eth0",
            "model": "Realtek 10baseT shit",
            "vendor": "Realtek Inc.",
            "mac_address": "71:86:9D:AA:96:DB",
            "interface_type": "Wired"
          }
        ],
        "battery_status": {
          "percentage_remaining": null,
          "time_remaining": null,
          "uptime": null
        }
      },
      "loan_details": {
        "assigned_to": null,
        "state": null
      }
    },
    {
      "id": "e517bc",
      "missing": false,
      "name": "Poe Dameron Scorpius",
      "os_details": {
        "os": "Ios"
      },
      "type": "Phone",
      "client_outdated": false,
      "client_version": "1.9.4",
      "description": "Apple iPhone, iOS",
      "logged_user": null,
      "network_status": {
        "last_known_ssid": null,
        "signal_strength": null
      },
      "user": {
        "email": "api@preyhq.com",
        "id": "cf6aea36bf7c",
        "links": [
          {
            "rel": "user",
            "href": "https://api.preyproject.com/v1/users/cf6aea36bf7c"
          }
        ]
      },
      "automations": [],
      "zones": [
        {
          "name": "HQ",
          "id": "6205e5",
          "links": [
            {
              "rel": "zone",
              "href": "https://api.preyproject.com/v1/zones/6205e5"
            }
          ]
        }
      ],
      "labels": [
        {
          "id": "f015af",
          "name": "buen finde",
          "links": [
            {
              "rel": "label",
              "href": "https://api.preyproject.com/v1/labels/f015af"
            }
          ]
        }
      ],
      "reports_details": {
        "reports_count": 0,
        "unread_reports": 0
      },
      "device_details": {
        "hardware": [
          {
            "name": "system",
            "data": [
              {
                "bios_vendor": "samsung"
              },
              {
                "bios_version": "BBCC00"
              }
            ]
          },
          {
            "name": "cpu",
            "data": [
              {
                "cpu_model": "Intel(R) Core(TM) i7-6500U CPU @ 2.50GHz"
              },
              {
                "cpu_speed": 2800
              }
            ]
          },
          {
            "name": "ram",
            "data": [
              {
                "ram_size": 1024
              }
            ]
          },
          {
            "name": "network_interface",
            "data": [
              {
                "name": "eth0"
              },
              {
                "model": "Realtek 10baseT shit"
              },
              {
                "vendor": "Realtek Inc."
              },
              {
                "mac_address": "43:18:52:AC:7C:D6"
              },
              {
                "interface_type": "Wired"
              }
            ]
          }
        ],
        "mac_addresses": [
          {
            "name": "eth0",
            "model": "Realtek 10baseT shit",
            "vendor": "Realtek Inc.",
            "mac_address": "43:18:52:AC:7C:D6",
            "interface_type": "Wired"
          }
        ],
        "battery_status": {
          "percentage_remaining": null,
          "time_remaining": null,
          "uptime": null
        }
      },
      "loan_details": {
        "assigned_to": null,
        "state": null
      }
    },
    {
      "id": "e1e6bf",
      "missing": false,
      "name": "Ki-Adi-Mundi Cancer",
      "os_details": {
        "os": "Windows"
      },
      "type": "Desktop",
      "client_outdated": false,
      "client_version": "1.9.4",
      "description": "Windows Desktop, 1.8 GHz",
      "logged_user": null,
      "network_status": {
        "last_known_ssid": null,
        "signal_strength": null
      },
      "user": {
        "email": "api@preyhq.com",
        "id": "cf6aea36bf7c",
        "links": [
          {
            "rel": "user",
            "href": "https://api.preyproject.com/v1/users/cf6aea36bf7c"
          }
        ]
      },
      "automations": [
        {
          "name": "Almuerzo Prey!",
          "id": "370590",
          "links": [
            {
              "rel": "automation",
              "href": "https://api.preyproject.com/v1/automations/370590"
            }
          ]
        }
      ],
      "zones": [],
      "labels": [
        {
          "id": "16f3d0",
          "name": "amigo javo",
          "links": [
            {
              "rel": "label",
              "href": "https://api.preyproject.com/v1/labels/16f3d0"
            }
          ]
        }
      ],
      "reports_details": {
        "reports_count": 0,
        "unread_reports": 0
      },
      "device_details": {
        "hardware": [
          {
            "name": "system",
            "data": [
              {
                "serial_number": "999146811071251"
              },
              {
                "uuid": "447740411580501"
              },
              {
                "bios_vendor": "Intel Corp."
              },
              {
                "bios_version": "080015"
              }
            ]
          },
          {
            "name": "cpu",
            "data": [
              {
                "cpu_model": "Intel(R) Core(TM) i5-2415M CPU @ 2.30GHz"
              },
              {
                "cpu_speed": 1800
              }
            ]
          },
          {
            "name": "ram",
            "data": [
              {
                "ram_size": 8000
              }
            ]
          },
          {
            "name": "network_interface",
            "data": [
              {
                "name": "eth0"
              },
              {
                "model": "Realtek 10baseT shit"
              },
              {
                "vendor": "Realtek Inc."
              },
              {
                "mac_address": "6F:56:77:88:F0:18"
              },
              {
                "interface_type": "Wired"
              }
            ]
          }
        ],
        "mac_addresses": [
          {
            "name": "eth0",
            "model": "Realtek 10baseT shit",
            "vendor": "Realtek Inc.",
            "mac_address": "6F:56:77:88:F0:18",
            "interface_type": "Wired"
          }
        ],
        "battery_status": {
          "percentage_remaining": null,
          "time_remaining": null,
          "uptime": null
        }
      },
      "loan_details": {
        "assigned_to": null,
        "state": null
      }
    },
    {
      "id": "f2d936",
      "missing": false,
      "name": "Watto Auriga",
      "os_details": {
        "os": "Ios"
      },
      "type": "Phone",
      "client_outdated": false,
      "client_version": "1.9.4",
      "description": "Apple iPhone, iOS",
      "logged_user": null,
      "network_status": {
        "last_known_ssid": null,
        "signal_strength": null
      },
      "user": {
        "email": "api@preyhq.com",
        "id": "cf6aea36bf7c",
        "links": [
          {
            "rel": "user",
            "href": "https://api.preyproject.com/v1/users/cf6aea36bf7c"
          }
        ]
      },
      "automations": [],
      "zones": [],
      "labels": [
        {
          "id": "f015af",
          "name": "buen finde",
          "links": [
            {
              "rel": "label",
              "href": "https://api.preyproject.com/v1/labels/f015af"
            }
          ]
        }
      ],
      "reports_details": {
        "reports_count": 0,
        "unread_reports": 0
      },
      "device_details": {
        "hardware": [
          {
            "name": "system",
            "data": [
              {
                "bios_vendor": "Dell Inc."
              },
              {
                "bios_version": "345"
              }
            ]
          },
          {
            "name": "cpu",
            "data": [
              {
                "cpu_model": "AArch64 Processor rev 2 (aarch64)"
              },
              {
                "cpu_speed": 2800
              }
            ]
          },
          {
            "name": "ram",
            "data": [
              {
                "ram_size": 8000
              }
            ]
          },
          {
            "name": "network_interface",
            "data": [
              {
                "name": "eth0"
              },
              {
                "model": "Realtek 10baseT shit"
              },
              {
                "vendor": "Realtek Inc."
              },
              {
                "mac_address": "D0:4B:9D:E9:B0:1E"
              },
              {
                "interface_type": "Wired"
              }
            ]
          }
        ],
        "mac_addresses": [
          {
            "name": "eth0",
            "model": "Realtek 10baseT shit",
            "vendor": "Realtek Inc.",
            "mac_address": "D0:4B:9D:E9:B0:1E",
            "interface_type": "Wired"
          }
        ],
        "battery_status": {
          "percentage_remaining": null,
          "time_remaining": null,
          "uptime": null
        }
      },
      "loan_details": {
        "assigned_to": null,
        "state": null
      }
    }
  ]
  totalRecords!: any;
  page: number = 1;
  searchQuery = '';
  page_size: number = 10;
  TheDevices: any[] = [];
  view = false


  constructor(private _shared: SharedService,
    private _router: Router,
    private http: HttpClient, 
    private service: ApiService,
    private _snackbar: SnackbarService) { }

  ngOnInit(): void {
    // this.devices = this._shared.getAllDevices();
    this.loadData();
  }
  loadData() {
    const params = new HttpParams().set('page', this.page).set('page_size', this.page_size);
    this.http.get('http://localhost:8081/all', { params }).subscribe((data: any) => {
      this.TheDevices = data;
      console.log(this.TheDevices);
    }, error =>{
      // console.log(error);
      this._snackbar.openSnackbar("Error loading server, please try again later", error);
    });
  }    

  deviceDetails(id: any) {
    // this.service.getApiKot(`Device/${id}`).subscribe((data)=>{
    //   console.log(data)
    //   


    // });

    
    this.TheDevices.forEach(device => {
      if (id === device.id) {
        let mapData = {
          id: id,
          lat: device.location.lat,
          lng: device.location.lng
        }
        this._shared.setMapData(mapData);
        this._shared.setDeviceDetails(device)
        this._router.navigate(['device-management']);
      }

    });


  }

  generatePdf() {
   
    const docDefinition = {
      content: [
        {
          text: 'Device Report',
          bold: true,
          fontSize: 20,
          // alignment: 'center',
          // margin: [0, 0, 0, 20],
        },
        {
          text: ' ', 
        },
        {
          text: ' ', 
        },
        {
          text: 'Report Date:',
          bold: true,
        },
        {
          text: 'Nov 10, 2023 - 17:09', 
        },
        {
          text: ' ', 
        },
        {
          text: ' ', 
        },
        {
          text: 'Ownwer:',
          bold: true,
        },
        {
          text: 'Neo Ngabutle', 
        },
        {
          text: ' ', 
        },
        {
          text: ' ', 
        },
        {
          text: 'Logged User:',
          bold: true,
        },
        {
          text: 'Gauteng_Law',   
        },
        {
          text: ' ', 
        },
        {
          text: ' ', 
        },
        {
          text: 'Device Location',
          bold: true,
        },
        {
          table:{
            body: [
              ['Latitude', 'Longitude'],
              ['-25.9448254', '28.1127602']
            ]
          }
        },
        {
          text: ' ', 
        },
        {
          text: ' ', 
        },
        {
          text: 'IP Addresses',
          bold: true,
        },
        {
          
          table:{
            body: [
              ['SSID', 'Public IP', 'Private IP', 'Gateway IP', 'MAC Address'],
              ['Nkgabutle%20', '41.23.4.241', '192.168.39.137', '192.168.39.1', '58:d9:d5:b9:e1:5c']
            ]
          }
        },
        {
          text: ' ', 
        },
        {
          text: ' ', 
        },
        {
          text: 'Device Details', 
          bold: true,
        },
        {
          table:{
            body: [
              ['CPU', 'RAM', 'MAC Address', 'Serial Number', 'UUID', 'BIOS Vendor', 'BIOS Version'],
              ['2.694 GHzIntel(R) Core(TM) i5-4310M CPU @ 2.70GHz', '4096MB', '34:E6:D7:30:E5:43', '7TCBL12', '4C4C4544-0054-4310-8042-B7C04F4C3132', 'Dell Inc.', 'A09']
            ]
          }
        }
        
      ],
      // style: {
      //   header: {
      //     fontSize: 18,
      //     bold: true,
      //     margin: [0, 0, 0, 10]
      //   },
      //   subheader: {
      //     fontSize: 16,
      //     bold: true,
      //     margin: [0, 10, 0, 5]
      //   },
      //   tableExample: {
      //     margin: [0, 5, 0, 15]
      //   }
      // }
  
    };

    pdfMake.createPdf(docDefinition).open();
  }

  generateCsv() {

    const data: any = []

    this.TheDevices.forEach(device => {
      let pdfData = {
        name: device.name,
        client_outdated: device.client_outdated,
        client_version: device.client_version,
        description: device.description,
        id: device.id,
        // labels: device.labels[0].name,
        missing: device.missing,
        os_details: device.os_details.os,
        report_count: device.reports_details.reportsCount,
        unreade_reports: device.reports_details.unreadReports,
        type: device.type,
        user: device.user.email,

      }

      data.push(pdfData);
    });

    console.log(data);

    let options = {
      title: 'Device Details',
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseperator: '.',
      showLabels: false,
      noDownload: false,
      showTitle: false,
      useBom: false,
      headers: ['name', 'client_outdated', 'client_version', 'description', 'id', 'missing', 'os_details', 'reports_counts', 'unread_report', 'type', 'user']
    };

    new ngxCsv(data, "devices-report", options);

  }

  gridView() {
    this.view = false;

  }

  cardView() {
    this.view = true;
  }

  filterData() {
    if (this.searchQuery) {
      this.TheDevices = this.TheDevices.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.TheDevices = this.TheDevices;
    }
  }

}
