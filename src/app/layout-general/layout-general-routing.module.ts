import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutGeneralComponent } from './layout-general.component';
import { SvgMapComponent } from './svg-map/svg-map.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "svg-map",
  },
  {
    path: "svg-map",
    component: SvgMapComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutGeneralRoutingModule { }
