import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudPage } from './crud.page';

const routes: Routes = [
  {
    path: '',
    component: CrudPage,
  },
  {
    path: 'home',
    component: CrudPage,
  },
  {
    path: 'crud',
    component: CrudPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudPageRoutingModule {}
