import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountryService} from '../../../services/country.service';
import {CountryResponseModel} from '../models/country-response.model';
import {StatisticService} from '../../../services/statistic.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  country;
  countryStatistics: CountryResponseModel;

  constructor(private route: ActivatedRoute, private countryService: CountryService, private statisticService: StatisticService) { }

  ngOnInit(): void {

    this.countryService.country$.subscribe(country => {
      this.country = country;
      this.statisticService.countryStatistics(this.country).subscribe(countryStatistics => {
        this.countryStatistics = countryStatistics;
      });
    });

    this.route.queryParamMap.subscribe(params => {
      this.country = params['country'];
    });



  }

}
