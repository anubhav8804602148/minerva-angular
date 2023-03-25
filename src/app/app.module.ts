import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { ContainerScreenComponent } from './container-screen/container-screen.component';
import { SiteSearchComponent } from './site-search/site-search.component';
import { RfdsServiceComponent } from './rfds-service/rfds-service.component';
import { DocumentAdminComponent } from './document-admin/document-admin.component';
import { PlumbingConfigComponent } from './plumbing-config/plumbing-config.component';
import { NgSelectModule } from '@ng-select/ng-select'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegionMapComponent } from './region-map/region-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MessageBannerComponent } from './message-banner/message-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    ContainerScreenComponent,
    SiteSearchComponent,
    RfdsServiceComponent,
    DocumentAdminComponent,
    PlumbingConfigComponent,
    RegionMapComponent,
    MessageBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    LeafletModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
