import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-container-screen',
  templateUrl: './container-screen.component.html',
  styleUrls: ['./container-screen.component.less']
})
export class ContainerScreenComponent implements OnDestroy {
  selectedScreen : string  = "site-search";
  private navigationSubscription: Subscription;

  constructor(private navigationService: NavigationService){
    this.navigationSubscription = this.navigationService.getCurrentPath().subscribe(
      path => {
        this.selectedScreen = path.currentPath;
      }
    )
  }
  ngOnDestroy(): void {
    this.navigationSubscription.unsubscribe();
  }
  
}
