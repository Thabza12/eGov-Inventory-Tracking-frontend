import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllDevices } from 'src/app/classes/all-devices';
import { SharedService } from 'src/app/services/shared.service';

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


  constructor(private _shared: SharedService,
    private _router: Router){}

  ngOnInit(): void {
    // this.devices = this._shared.getAllDevices();
    
  }

  deviceDetails(id: any){
    this.devices.forEach(device => {
      if (id === device.id) {
        this._shared.setDeviceDetails(device)
        this._router.navigate(['device-management']);
      }
      
    });

  }

  filterData() {
    if (this.searchQuery) {
      this.devices = this.devices.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.devices = this.devices;
    }
  }

}
