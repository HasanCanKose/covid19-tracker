import {Component, Input, OnInit} from '@angular/core';
import {StatisticResponseModel} from '../../statistic/models/statistic-response.model';
import {CountryResponseModel} from '../../statistic/models/country-response.model';

@Component({
  selector: 'app-statistic-summary',
  templateUrl: './statistic-summary.component.html',
  styleUrls: ['./statistic-summary.component.css']
})
export class StatisticSummaryComponent implements OnInit {

  @Input() statistics: StatisticResponseModel;
  @Input() countryStatistics: CountryResponseModel;

  @Input() isCountry;
  @Input() isWorld;

  constructor() { }

  ngOnInit(): void {
    console.log(this.countryStatistics);
  }

}
