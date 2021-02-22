import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {StatisticResponseModel} from '../models/statistic-response.model';
import {Observable} from 'rxjs';
import {StatisticService} from '../services/statistic.service';


@Injectable({providedIn: 'root'})
export class WorldResolver implements Resolve<StatisticResponseModel>{

  constructor(private statisticService: StatisticService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<StatisticResponseModel> | Promise<StatisticResponseModel> | StatisticResponseModel {

    return this.statisticService.worldStatistics();
  }
}
