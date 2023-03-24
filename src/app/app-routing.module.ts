import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';

const routes: Routes = [
  {path:"siteSearch", component: HeaderNavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
