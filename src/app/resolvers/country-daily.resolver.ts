import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {StatisticService} from '../services/statistic.service';
import {CountryDailyResponseModel} from '../models/country-daily-response.model';


@Injectable({providedIn: 'root'})
export class CountryDailyResolver implements Resolve<CountryDailyResponseModel>{


  constructor(private statisticService: StatisticService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CountryDailyResponseModel> | Promise<CountryDailyResponseModel> | CountryDailyResponseModel {

    const country = route.params.country;
    return this.statisticService.countryDailyStatistics(country);
  }
}
