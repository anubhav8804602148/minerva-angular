import { Component } from '@angular/core';

@Component({
  selector: 'app-container-screen',
  templateUrl: './container-screen.component.html',
  styleUrls: ['./container-screen.component.less']
})
export class ContainerScreenComponent {
  selectedScreen : string  = "document-admin";
}
