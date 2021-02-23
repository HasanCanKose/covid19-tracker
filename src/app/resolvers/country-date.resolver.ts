import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CountryDateResponseModel} from '../models/country-date-response.model';
import {Observable} from 'rxjs';
import {StatisticService} from '../services/statistic.service';


@Injectable({providedIn: 'root'})
export class CountryDateResolver implements Resolve<CountryDateResponseModel>{

  constructor(private statisticService: StatisticService) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CountryDateResponseModel> | Promise<CountryDateResponseModel> | CountryDateResponseModel {

    const country = route.params.country;
    return this.statisticService.countryDateStatistics(country);
  }
}
