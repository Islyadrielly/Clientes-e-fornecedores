import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedoresComponent } from './fornecedores.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    FornecedoresComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ],

  exports: [
    FornecedoresComponent,
  ],
})
export class FornecedoresModule { }
