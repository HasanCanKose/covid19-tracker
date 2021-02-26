import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {WorldDailyResponseModel} from '../models/world-daily-response.model';
import {Observable} from 'rxjs';
import {StatisticService} from '../services/statistic.service';


@Injectable({providedIn: 'root'})
export class WorldDailyResolver implements Resolve<WorldDailyResponseModel> {

  constructor(private statisticService: StatisticService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<WorldDailyResponseModel> | Promise<WorldDailyResponseModel> | WorldDailyResponseModel {

    return this.statisticService.worldDailyStatistics();
  }
}
