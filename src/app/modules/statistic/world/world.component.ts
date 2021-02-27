import {Component, OnInit} from '@angular/core';
import {StatisticService} from '../../../services/statistic.service';
import {ActivatedRoute} from '@angular/router';
import {WorldResponseModel} from '../../../models/world-response.model';
import {WorldDailyResponseModel} from '../../../models/world-daily-response.model';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {

  statistics: WorldResponseModel;
  dailyStatistics: WorldDailyResponseModel;
  caseDates: string[];
  cases: number[];
  deathDates: string[];
  deaths: number[];
  recoveredDates: string[];
  recovered: number[];

  constructor(private statisticService: StatisticService, private route: ActivatedRoute) {
    this.route.data.subscribe(data => this.statistics = data['statistics']);
    this.route.data.subscribe(data => this.dailyStatistics = data['dailyStatistics']);
  }

  ngOnInit(): void {
    this.casesObjectToArray();
    this.deathsObjectToArray();
    this.recoveredObjectToArray();
  }

  casesObjectToArray() {
    this.caseDates = Object.keys(this.dailyStatistics.cases).map(key => {
      return key
    });
    this.cases = Object.values(this.dailyStatistics.cases).map(value => {
      return value
    });
  }

  deathsObjectToArray() {
    this.deathDates = Object.keys(this.dailyStatistics.deaths).map(key => {
      return key
    });
    this.deaths = Object.values(this.dailyStatistics.deaths).map(value => {
      return value
    });
  }

  recoveredObjectToArray() {
    this.recoveredDates = Object.keys(this.dailyStatistics.recovered).map(key => {
      return key
    });
    this.recovered = Object.values(this.dailyStatistics.recovered).map(value => {
      return value
    });
  }

}
