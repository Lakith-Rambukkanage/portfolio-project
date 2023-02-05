import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutGeneralRoutingModule } from './layout-general-routing.module';
import { LayoutGeneralComponent } from './layout-general.component';
import { NavCommonsModule } from '../nav-commons/nav-commons.module';


@NgModule({
  declarations: [
    LayoutGeneralComponent
  ],
  imports: [
    CommonModule,
    NavCommonsModule,
    LayoutGeneralRoutingModule
  ]
})
export class LayoutGeneralModule { }
