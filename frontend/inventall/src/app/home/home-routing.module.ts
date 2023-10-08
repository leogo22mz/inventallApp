import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CrudPage } from '../crud/crud.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'crud',
    component: CrudPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
