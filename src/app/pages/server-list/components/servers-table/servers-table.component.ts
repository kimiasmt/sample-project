import { Component, OnInit } from '@angular/core';
import { Services } from '../../../../../assets/data/Services';
@Component({
  selector: 'app-servers-table',
  templateUrl: './servers-table.component.html',
  styleUrls: ['./servers-table.component.scss']
})
export class ServersTableComponent implements OnInit {
  services: any;
  constructor() { }

  ngOnInit(): void {
    this.services = Services.data;
  }
  // convertData() {
  //   Services.data.map(item => {
  //     if()
  //   })
  // }

}
