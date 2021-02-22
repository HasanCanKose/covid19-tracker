import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CountryResponseModel} from '../modules/statistic/models/country-response.model';
import {Observable} from 'rxjs';
import {StatisticService} from '../services/statistic.service';
import {count, filter, map, switchMap, tap} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class CountryResolver implements Resolve<CountryResponseModel>{


  country;
  constructor(private statisticService: StatisticService, private route: ActivatedRoute) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CountryResponseModel> | Promise<CountryResponseModel> | CountryResponseModel {

    // return this.route.queryParams.pipe(
    //   filter(params => !!params['country']),
    //   map(params => params['country']),
    //   switchMap(country => {
    //     return this.statisticService.countryStatistics(country);
    //   }),
    // );
    // return this.route.queryParams.pipe(
    //   filter(country => !!country['country']),
    //   map(country => this.country = country['country']),
    //   switchMap(country =>
    //   this.statisticService.countryStatistics(this.country)
    // ))
    return;
  }
}
