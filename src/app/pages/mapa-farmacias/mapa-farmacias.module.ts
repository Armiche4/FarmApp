import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapaFarmaciasPage } from './mapa-farmacias.page';

const routes: Routes = [
  {
    path: '',
    component: MapaFarmaciasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MapaFarmaciasPage]
})
export class MapaFarmaciasPageModule {}
