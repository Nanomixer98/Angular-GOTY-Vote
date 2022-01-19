import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarrasComponent } from './grafico-barras/grafico-barras.component';

@NgModule({
  declarations: [
    NavbarComponent,
    GraficoBarrasComponent
  ],
  exports: [
    NavbarComponent,
    GraficoBarrasComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
