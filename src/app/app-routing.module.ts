import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutGeneralComponent } from './layout-general/layout-general.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutGeneralComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layout-general/layout-general.module').then(m => m.LayoutGeneralModule)
    }]
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
