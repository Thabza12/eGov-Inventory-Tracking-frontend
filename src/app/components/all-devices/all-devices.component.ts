import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllDevices } from 'src/app/classes/all-devices';
import { SharedService } from 'src/app/services/shared.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { flatMap } from 'rxjs';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {ApiService} from 'src/app/services/api.service';

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
  view = true


  constructor(private _shared: SharedService,
    private _router: Router, private http: HttpClient,private service:ApiService) { }

  ngOnInit(): void {
    // this.devices = this._shared.getAllDevices();
    this.loadData();
  }
  loadData() {
    const params = new HttpParams().set('page', this.page).set('page_size', this.page_size);
    this.http.get('http://localhost:8081/AllDevices', { params }).subscribe((data: any) => {
      this.TheDevices = data;
      console.log(this.TheDevices[1].automations[0].links);
    });
  }

  deviceDetails(id: any) {
    this.service.getApiKot(`Device/${id}`).subscribe((data)=>{
      console.log(data)
      let mapData = {
        id:id,
        lat:data.Location.lat,
        lng:data.Location.lng
      }

      this._shared.setMapData(mapData);
      this._router.navigate(['device-management']);
    });
    // this.TheDevices.forEach(device => {
    //   if (id === device.id) {
    //     this._shared.setDeviceDetails(device)
    //     this._router.navigate(['device-management']);
    //   }

    // });

  }

  generatePdf() {
    // const data = [['Name', 'Operating System', 'Description', 'Missing', 'Outdated'],
    // ['John Doe', 'johndoe@example.com', 'USA'],
    // ['Jane Smith', 'janesmith@example.com', 'Canada'],
    // ['Bob Johnson', 'bobjohnson@example.com', 'UK']
    // ];

    const columns = Object.keys(this.TheDevices[0]);
    const headers = columns.map((column) => ({text: column, style: 'tableHeader'}));

    const rows = this.TheDevices.flatMap((device) => {
      const cells = columns.map((column) => ({text: device[column]}));

      const automationRows = device.automations.flatMap((auto: any) => {
        const autoColumns = Object.keys(auto);
        const autoCells = autoColumns.map((autoColumn) => ({text: auto[autoColumn]}))
        const links = auto.links.map((link: any) => Object.keys(link).map((key) => ({text: link[key]})));
        console.log('auto links:', links);
        return [...[autoCells], ...links];
      });

      const labelRows = device.labels.flatMap((label: any) => {
        const labelColumns = Object.keys(label);
        const labelCells = labelColumns.map((labelColumn) => ({text: label[labelColumn]}))
        const links = label.links.map((link: any) => Object.keys(link).map((key) => ({text: link[key]})));
        console.log('label links:', links);
        return [...[labelCells], ...links];
      });

      const zoneRows = device.zones.flatMap((zone: any) => {
        const zoneColumns = Object.keys(zone);
        const zoneCells = zoneColumns.map((zoneColumn) => ({text: zone[zoneColumn]}))
        const links = zone.links.map((link: any) => Object.keys(link).map((key) => ({text: link[key]})));
        console.log('zone links:', links);
        return [...[zoneCells], ...links];
      });

      const detailsRows = device.device_details.hardware[0].data.flatMap((detail: any) => {
        const detailColumns = Object.keys(detail);
        const detailCells = detailColumns.map((detailColumn) => ({text: detail[detailColumn]}));
        // const hardwareRows = this.TheDevices[0].device_details.hardware[0].data.map((data: any) => Object.keys(data).map((key1) => ({text: data[key1]})));
        // console.log(detailCells)
        return [...[detailCells]];
      
      });
      // const automationRows = device.automations.map((automation: any) => Object.keys(automation).map((key) => ({text: automation[key]})));
      // const labelRows = device.labels.map((label: any) => Object.keys(label).map((key1) => ({text: label[key1]})));
      // const zoneRows = device.zones.map((zone: any) => Object.keys(zone).map((key) => ({text: zone[key]})));

      return [...[cells], ...automationRows, ...labelRows, ...zoneRows, ...detailsRows];
    });

    

    

    

    

    // const detailRows = this.TheDevices[0].device_details.hardware[0].flatMap((detail: any) => {
    //   const cells = columns.map((column) => ({text: detail[column]}));
    //   return [...[cells]]
    // })

    console.log(rows);

    let docDefinition = {
      content: [
        { text: 'Device Data', style: 'header' },
        { table: { headerRows: 1, widths: headers.map(() => '*'), body: [headers, ...rows] } }
      ],
    };

    pdfMake.createPdf(docDefinition).open();

    // let docDefinition = {
    //   content: [this.TheDevices]
    // };

    // pdfMake.createPdf(docDefinition).open();
  }

  missing(name: string) {

  }

  lockScreen(name: string) {

  }

  soundAlarm(name: string) {

  }

  locationActivity(name: string) {

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
