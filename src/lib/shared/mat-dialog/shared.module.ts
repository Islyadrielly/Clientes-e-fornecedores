import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogComponent } from './mat-dialog.component'




@NgModule({
  declarations: [
    MatDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
  ],

  exports: [
    MatDialogComponent,
  ],

})
export class SharedModule { }
