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
    this.objectToArray();
  }
  mapToKeyValueArray(values) {
    return Object.entries(values).reduce((acc, [key, value]) => {
      return [[...acc[0], key], [...acc[1], value]];
    }, [[], []]);
  }

  objectToArray() {
    [this.caseDates, this.cases] = this.mapToKeyValueArray(this.dailyStatistics.cases);
    [this.deathDates, this.deaths] = this.mapToKeyValueArray(this.dailyStatistics.deaths);
    [this.recoveredDates, this.recovered] = this.mapToKeyValueArray(this.dailyStatistics.recovered);
  }


}
