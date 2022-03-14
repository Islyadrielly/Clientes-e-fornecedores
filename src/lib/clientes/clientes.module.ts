import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { MatTableModule } from '@angular/material/table';
import { InMemoryDataService } from '../../app/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ClientesComponent,

  ],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}),
    MatButtonModule,
    MatIconModule,  
  ],

  exports: [
    ClientesComponent,
  ],

})
export class ClientesModule { }
