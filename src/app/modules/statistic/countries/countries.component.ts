import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountryResponseModel} from '../../../models/country-response.model';
import {CountryDailyResponseModel} from '../../../models/country-daily-response.model';


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

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.statistics = data['statistics'];
      this.dailyStatistics = data['dailyStatistics'];
      this.objectToArray();
    })
  }

  mapToKeyValueArray(values) {
    return Object.entries(values).reduce((acc, [key, value]) => {
      return [[...acc[0], key], [...acc[1], value]];
    }, [[], []]);
  }

  objectToArray() {
    [this.caseDates, this.cases] = this.mapToKeyValueArray(this.dailyStatistics.timeline.cases);
    [this.deathDates, this.deaths] = this.mapToKeyValueArray(this.dailyStatistics.timeline.deaths);
    [this.recoveredDates, this.recovered] = this.mapToKeyValueArray(this.dailyStatistics.timeline.recovered);
  }
}
