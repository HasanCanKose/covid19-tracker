import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CountryResponseModel} from '../models/country-response.model';
import {Observable} from 'rxjs';
import {StatisticService} from '../services/statistic.service';


@Injectable({providedIn: 'root'})
export class CountryResolver implements Resolve<CountryResponseModel>{


  constructor(private statisticService: StatisticService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CountryResponseModel> | Promise<CountryResponseModel> | CountryResponseModel {

    const country = route.params.country;
    return this.statisticService.countryStatistics(country);
  }
}
