import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountryService} from '../../../services/country.service';
import {CountryResponseModel} from '../models/country-response.model';
import {StatisticService} from '../../../services/statistic.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit, OnDestroy {

  country;
  countryStatistics: CountryResponseModel;
  isCountry;

  constructor(private route: ActivatedRoute, private countryService: CountryService, private statisticService: StatisticService) {
    this.route.data.subscribe(countryStatistics => this.countryStatistics = countryStatistics['country']);
  }

  ngOnInit(): void {

    this.countryService.country$.subscribe(country => {
      this.country = country;
      console.log(this.country);
      this.statisticService.countryStatistics(this.country).subscribe(countryStatistics => {
        this.countryStatistics = countryStatistics;
        console.log(this.countryStatistics.cases);
      });
    });

    this.isCountry = true;
  }

  ngOnDestroy() {
    this.isCountry = false;
  }

}
