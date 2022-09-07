import { Injectable } from '@angular/core';
import { Services } from '../../assets/data/Services';
import { BehaviorSubject } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServerListFilterService {
  servicesData$;
  data = Services.data.map((item:any) => {
    return({...item,'action': this.setAction(item.status)})
  })
  constructor() {
    this.servicesData$ = new BehaviorSubject(this.data);
  }
  updateList(type:string) {
    if( type == 'All services') {
      this.servicesData$.next(this.data) ;
    } else {
      this.servicesData$.next( this.data.filter((item:any) => item.type == type));
    }
  }

  setAction(status: string) {
    switch (status) {
     case 'Pending':
      return  'مشاهده فاکتور'
      case 'Active':
       return 'مدیریت سرویس'
      case 'Cancelled':
        return 'لغو'
      default:
        return ''
    }
  }
}
