import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticSummaryComponent } from './statistic-summary/statistic-summary.component';
import { NumbersWithCommasPipe } from './pipes/numbers-with-commas.pipe';



@NgModule({
  declarations: [StatisticSummaryComponent, NumbersWithCommasPipe],
  imports: [
    CommonModule
  ],
  exports: [StatisticSummaryComponent, NumbersWithCommasPipe]
})
export class SharedModule { }
