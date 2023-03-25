import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: Subject<any> = new Subject();
  
  setMessage(level: string, message: string){
    this.message.next({
      message: message,
      level: level
    });
  }
  
  getMessage(): Observable<any>{
    return this.message.asObservable(); 
  }
}
