import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemedioDetalhesPageRoutingModule } from './remedio-detalhes-routing.module';

import { RemedioDetalhesPage } from './remedio-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemedioDetalhesPageRoutingModule
  ],
  declarations: [RemedioDetalhesPage]
})
export class RemedioDetalhesPageModule {}
