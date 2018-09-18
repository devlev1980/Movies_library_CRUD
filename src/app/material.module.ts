import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    Material.MatCardModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatDialogModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatTooltipModule
  ],
  exports: [
    Material.MatCardModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatDialogModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatTooltipModule






  ],
  declarations: []
})
export class MaterialModule { }
