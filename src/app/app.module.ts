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

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    ContainerScreenComponent,
    SiteSearchComponent,
    RfdsServiceComponent,
    DocumentAdminComponent,
    PlumbingConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
