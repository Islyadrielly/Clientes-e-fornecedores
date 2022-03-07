import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClientesModule } from 'src/lib/clientes/clientes.module';
import { FornecedoresModule } from 'src/lib/fornecedores/fornecedores.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClientesModule,
    FornecedoresModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
