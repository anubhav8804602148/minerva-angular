import { Component } from '@angular/core';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.less']
})
export class HeaderNavbarComponent {
  navbarItems = [
    {
      "url": "/siteSearch",
      "title": "Site Search"
    },
    {
      "url": "/documentAdmin",
      "title": "Document Admin"
    },
    {
      "url": "/plumbingConfig",
      "title": "Plumbing Config"
    },
  ];
  showPageInConatiner = function(targetPage : string){
    
  }
}
