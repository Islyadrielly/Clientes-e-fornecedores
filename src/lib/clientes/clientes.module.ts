import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    ClientesComponent,

  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatTableModule,
  ],

  exports: [
    ClientesComponent,
  ],

})
export class ClientesModule { }
