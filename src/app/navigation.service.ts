import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private activePage: Subject<any> = new Subject();

  setCurrentPath(currentPath: String){
    this.activePage.next({currentPath: currentPath});
  }
  
  getCurrentPath(): Observable<any>{
    console.log(this.activePage);
    return this.activePage.asObservable();
  }
}
