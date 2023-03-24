import { Component } from '@angular/core';
import {NavigationService} from 'src/app/navigation.service'

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.less']
})
export class HeaderNavbarComponent {
  currentPath: string = "site-search";
  navbarItems = [
    {
      "url": "/siteSearch",
      "title": "Site Search",
      "name": "site-search"
    },
    {
      "url": "/documentAdmin",
      "title": "Document Admin",
      "name": "document-admin"
    },
    {
      "url": "/plumbingConfig",
      "title": "Plumbing Config",
      "name": "plumbing-config"
    },
  ];
  constructor(private navigationService: NavigationService){}
  showPageInConatiner(targetPage : string) :void{
    this.currentPath = targetPage;
    this.navigationService.setCurrentPath(targetPage);
  }
}
