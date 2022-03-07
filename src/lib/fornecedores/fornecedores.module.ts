import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedoresComponent } from './fornecedores.component';



@NgModule({
  declarations: [
    FornecedoresComponent
  ],
  imports: [
    CommonModule,
  ],

  exports: [
    FornecedoresComponent,
  ],
})
export class FornecedoresModule { }
