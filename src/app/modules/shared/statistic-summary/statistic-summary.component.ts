import {Component, Input, OnInit} from '@angular/core';
import {StatisticResponseModel} from '../../../models/statistic-response.model';

@Component({
  selector: 'app-statistic-summary',
  templateUrl: './statistic-summary.component.html',
  styleUrls: ['./statistic-summary.component.css']
})
export class StatisticSummaryComponent implements OnInit {

  casesLabel = 'Cases';
  deathsLabel = 'Deaths';
  recoveredLabel = 'Recovered';

  @Input() statistics: StatisticResponseModel;
  @Input() caseDates: string[];
  @Input() cases: number[];
  @Input() deathDates: string[];
  @Input() deaths: number[];
  @Input() recoveredDates: string[];
  @Input() recovered: number[];

  constructor() { }

  ngOnInit(): void {
  }

}
