import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'

const MaterialComponents = [
  MatFormFieldModule,
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule
]

@NgModule({
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports: [MaterialComponents]
})
export class MaterialModule { }
