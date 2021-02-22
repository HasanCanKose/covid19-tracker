import {Component, OnDestroy, OnInit} from '@angular/core';
import {StatisticService} from '../../../services/statistic.service';
import {StatisticResponseModel} from '../models/statistic-response.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit, OnDestroy {

  statistics: StatisticResponseModel;
  isWorld;


  constructor(private statisticService: StatisticService, private route: ActivatedRoute) {
    this.route.data.subscribe(statistics => this.statistics = statistics['world']);
  }

  ngOnInit(): void {
    this.isWorld = true;
  }
 ngOnDestroy() {
    this.isWorld = false;
 }
}
