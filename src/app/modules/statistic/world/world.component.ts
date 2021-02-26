import {Component, OnDestroy, OnInit} from '@angular/core';
import {StatisticService} from '../../../services/statistic.service';
import {StatisticResponseModel} from '../../../models/statistic-response.model';
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

  constructor(private statisticService: StatisticService, private route: ActivatedRoute) {
    this.route.data.subscribe(data => this.statistics = data['statistics']);
    this.route.data.subscribe(data => this.dailyStatistics = data['dailyStatistics']);
  }

  ngOnInit(): void {
  }

}
