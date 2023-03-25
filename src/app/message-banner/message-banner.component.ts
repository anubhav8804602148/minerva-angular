import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-banner',
  templateUrl: './message-banner.component.html',
  styleUrls: ['./message-banner.component.less']
})
export class MessageBannerComponent implements OnDestroy{
  messageSubscription: Subscription;
  message: any;
  level: string;
  constructor(private messageService: MessageService){
    this.message = "";
    this.level = "hidden-message-banner";
    this.messageSubscription = this.messageService.getMessage().subscribe(message => {
      this.showMessageBanner();
      this.message = message.message;
      this.level = message.level+"-message-banner";
      setTimeout(this.hideMessageBanner, 3000);
    });
  }

  hideMessageBanner(){
    let banner: HTMLElement| null = document.getElementById("messageBanner");
    if(banner){
      banner.style.display = "none";
    } 
  }

  showMessageBanner(){
    let banner: HTMLElement| null = document.getElementById("messageBanner");
    if(banner) banner.style.display = "block";
  }

  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
  }
}
