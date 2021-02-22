import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CountryResponseModel} from '../models/country-response.model';
import {Observable} from 'rxjs';
import {StatisticService} from '../services/statistic.service';
import {count, filter, map, switchMap, tap} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class CountryResolver implements Resolve<CountryResponseModel>{


  constructor(private statisticService: StatisticService, private route: ActivatedRoute) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CountryResponseModel> | Promise<CountryResponseModel> | CountryResponseModel {

    console.log(route, "--", state);
    const country = route.params.country;
    console.log(country);
    return this.statisticService.countryStatistics(country);
  }
}
