import {Component, Input, OnInit} from '@angular/core';
import {StatisticResponseModel} from '../../../models/statistic-response.model';
import {CountryResponseModel} from '../../../models/country-response.model';

@Component({
  selector: 'app-statistic-summary',
  templateUrl: './statistic-summary.component.html',
  styleUrls: ['./statistic-summary.component.css']
})
export class StatisticSummaryComponent implements OnInit {

  @Input() statistics: StatisticResponseModel;


  constructor() { }

  ngOnInit(): void {
  }

}
