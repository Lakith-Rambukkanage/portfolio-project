import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';



@NgModule({
  declarations: [
    NavHeaderComponent,
    NavFooterComponent,
    NavSidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavHeaderComponent,
    NavFooterComponent,
    NavSidebarComponent,
  ]
})
export class NavCommonsModule { }
