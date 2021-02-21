import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { WorldComponent } from './world/world.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [CountriesComponent, WorldComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StatisticModule { }
