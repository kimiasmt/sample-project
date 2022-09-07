import { Component, OnInit } from '@angular/core';
import { serviceTypes } from '../../../../../assets/config/serviceTypes.';
import { Services } from '../../../../../assets/data/Services';
import { ServerListFilterService } from '../../../../services/server-list-filter.service';
import { ServerListComponent } from '../../server-list.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  serviceTypes : Array<{icon:string,type:string}> = [];
  services : any = []
  constructor(private serverListFilter : ServerListFilterService) { }

  ngOnInit(): void {
    this.serviceTypes = serviceTypes;
    this.services = Services.data;
  }

  filterServices (itemType: string) {
    return  this.services.filter((item:any) => item.type == itemType).length;
  }

  selectService(type:string) {
    console.log("hi");
    this.serverListFilter.updateList(type);
  }
}
