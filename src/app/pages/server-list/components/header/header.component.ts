import { Component, OnInit } from '@angular/core';
import { serviceTypes } from '../../config/serviceTypes.';
import { Services } from '../../../../../assets/data/Services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  serviceTypes : Array<{icon:string,type:string}> = [];
  services : any = []
  constructor() { }

  ngOnInit(): void {
    this.serviceTypes = serviceTypes;
    this.services = Services.data;
  }

  filterServices (itemType: string) {
    return  this.services.filter((item:any) => item.type == itemType).length;
  }
}
