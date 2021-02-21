import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { WorldComponent } from './world/world.component';



@NgModule({
  declarations: [CountriesComponent, WorldComponent],
  imports: [
    CommonModule
  ]
})
export class StatisticModule { }
