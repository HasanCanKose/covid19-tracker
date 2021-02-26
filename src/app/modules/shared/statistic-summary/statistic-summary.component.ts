import {Component, Input, OnInit} from '@angular/core';
import {StatisticResponseModel} from '../../../models/statistic-response.model';
import {CountryDailyResponseModel} from '../../../models/country-daily-response.model';

@Component({
  selector: 'app-statistic-summary',
  templateUrl: './statistic-summary.component.html',
  styleUrls: ['./statistic-summary.component.css']
})
export class StatisticSummaryComponent implements OnInit {

  @Input() statistics: StatisticResponseModel;
  @Input() caseDates: string[];
  @Input() cases: number[];
  @Input() deathDates: string[];
  @Input() deaths: number[];
  @Input() recoveredDates: string[];
  @Input() recovered: number[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.caseDates);
  }

}
