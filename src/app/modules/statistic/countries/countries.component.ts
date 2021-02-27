import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountryResponseModel} from '../../../models/country-response.model';
import {CountryDailyResponseModel} from '../../../models/country-daily-response.model';
import {StatisticService} from '../../../services/statistic.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  statistics: CountryResponseModel;
  dailyStatistics: CountryDailyResponseModel;
  caseDates: string[];
  cases: number[];
  deathDates: string[];
  deaths: number[];
  recoveredDates: string[];
  recovered: number[];

  country: string;


  constructor(private route: ActivatedRoute, private statisticService: StatisticService) {
    this.route.data.subscribe(data => this.statistics = data['statistics']);
    // this.route.data.subscribe(data => this.dailyStatistics = data['dailyStatistics']);
  }

  ngOnInit(): void {
    this.statisticService.country$.subscribe(country => this.country = country);
    this.statisticService.countryDailyStatistics(this.country).subscribe(dailyStatistics => {
      this.dailyStatistics = dailyStatistics;
      this.casesObjectToArray();
      this.deathsObjectToArray();
      this.recoveredObjectToArray();
    });
  }

  casesObjectToArray() {
    this.caseDates = Object.keys(this.dailyStatistics.timeline.cases).map(key => {
      return key
    });
    this.cases = Object.values(this.dailyStatistics.timeline.cases).map(value => {
      return value
    });
  }

  deathsObjectToArray() {
    this.deathDates = Object.keys(this.dailyStatistics.timeline.deaths).map(key => {
      return key
    });
    this.deaths = Object.values(this.dailyStatistics.timeline.deaths).map(value => {
      return value
    });
  }

  recoveredObjectToArray() {
    this.recoveredDates = Object.keys(this.dailyStatistics.timeline.recovered).map(key => {
      return key
    });
    this.recovered = Object.values(this.dailyStatistics.timeline.recovered).map(value => {
      return value
    });
  }
}
