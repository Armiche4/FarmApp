import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiaCercaPage } from './dia-cerca.page';

const routes: Routes = [
  {
    path: '',
    component: DiaCercaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiaCercaPage]
})
export class DiaCercaPageModule {}
