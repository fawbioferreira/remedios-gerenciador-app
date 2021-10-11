import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemedioDetalhesPage } from './remedio-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: RemedioDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemedioDetalhesPageRoutingModule {}
