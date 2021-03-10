import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticSummaryComponent } from './statistic-summary/statistic-summary.component';
import { ChartComponent } from './chart/chart.component';



@NgModule({
  declarations: [StatisticSummaryComponent, ChartComponent],
  imports: [
    CommonModule
  ],
  exports: [StatisticSummaryComponent]
})
export class SharedModule { }
