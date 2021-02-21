import { Component, OnInit } from '@angular/core';
import {StatisticService} from '../../../services/statistic.service';
import {StatisticResponseModel} from '../models/statistic-response.model';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {

  statistics: StatisticResponseModel;


  constructor(private statisticService: StatisticService) { }

  ngOnInit(): void {
    this.statisticService.worldStatistics().subscribe(statistics => {
      this.statistics = statistics;
    })

  }

}
