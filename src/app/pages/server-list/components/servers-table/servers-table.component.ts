import { Component, OnInit } from '@angular/core';
import { ServerListFilterService } from '../../../../services/server-list-filter.service';
@Component({
  selector: 'app-servers-table',
  templateUrl: './servers-table.component.html',
  styleUrls: ['./servers-table.component.scss']
})
export class ServersTableComponent implements OnInit {
  services: any;
  convertedServiceData = []
  constructor(private serverListFilter: ServerListFilterService) { }

  ngOnInit(): void {
    this.serverListFilter.servicesData$.subscribe( data =>
      // console.log(data)
      this.services = data
    );
  }
}
