import { NgModule } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatGridList } from '@angular/material/grid-list';
import { MatGridTile } from '@angular/material/grid-list';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/input';
import { MatLabel } from '@angular/material/input';

const MaterialComponents = [
  MatButton,
  MatInput, 
  MatFormField, 
  MatLabel, 
  MatGridList, 
  MatGridTile
]

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
