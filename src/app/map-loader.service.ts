import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Region } from './models/minerva.map.daos';

@Injectable({
  providedIn: 'root'
})
export class MapLoaderService {

  private currentSelectedRegions : Subject<any> = new Subject();

  setSelectedRegions(regions : Region[]){
    this.currentSelectedRegions.next({selectedRegions: regions})
  }

  getSelectedRegions(){
    return this.currentSelectedRegions.asObservable();
  }

}
