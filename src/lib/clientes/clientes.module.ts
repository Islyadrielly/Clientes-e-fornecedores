import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ClientesComponent,

  ],
  imports: [
    CommonModule,
    MatTableModule,
  ],

  exports: [
    ClientesComponent,
  ],

})
export class ClientesModule { }
