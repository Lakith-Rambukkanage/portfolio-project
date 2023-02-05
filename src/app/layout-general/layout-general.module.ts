import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutGeneralRoutingModule } from './layout-general-routing.module';
import { LayoutGeneralComponent } from './layout-general.component';
import { NavCommonsModule } from '../nav-commons/nav-commons.module';
import { SvgMapComponent } from './svg-map/svg-map.component';
import { SvgMapTemplateSlComponent } from './svg-map/svg-map-template-sl/svg-map-template-sl.component';


@NgModule({
  declarations: [
    LayoutGeneralComponent,
    SvgMapComponent,
    SvgMapTemplateSlComponent
  ],
  imports: [
    CommonModule,
    NavCommonsModule,
    LayoutGeneralRoutingModule
  ]
})
export class LayoutGeneralModule { }
