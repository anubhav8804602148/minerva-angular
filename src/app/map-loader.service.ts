import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapLoaderService {

  private currentSelectedRegions : Subject<any> = new Subject();

  setSelectedRegions(regions : string[]){
    this.currentSelectedRegions.next({selectedRegions: regions})
  }

  getSelectedRegions(){
    return this.currentSelectedRegions.asObservable();
  }

}
