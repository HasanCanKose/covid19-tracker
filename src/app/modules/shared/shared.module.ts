import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticSummaryComponent } from './statistic-summary/statistic-summary.component';



@NgModule({
  declarations: [StatisticSummaryComponent],
  imports: [
    CommonModule
  ],
  exports: [StatisticSummaryComponent]
})
export class SharedModule { }
