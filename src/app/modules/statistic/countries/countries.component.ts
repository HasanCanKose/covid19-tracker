import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountryResponseModel} from '../../../models/country-response.model';
import {CountryDateResponseModel} from '../../../models/country-date-response.model';
import {StatisticService} from '../../../services/statistic.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  statistics: CountryResponseModel;
  dateStatistics: CountryDateResponseModel;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => this.statistics = data['statistics']);
    this.route.data.subscribe(data => this.dateStatistics = data['dateStatistics']);
  }

  ngOnInit(): void {

  }
}
