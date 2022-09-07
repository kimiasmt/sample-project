import { Injectable } from '@angular/core';
import { Services } from '../../assets/data/Services';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerListFilterService {
  servicesData$ = new BehaviorSubject([...Services.data]);
  constructor() { }
  updateList(type:string) {
    if( type == 'All services') {
      this.servicesData$.next(Services.data) ;
    } else {
      this.servicesData$.next( Services.data.filter((item:any) => item.type == type));
    }
  }
}
