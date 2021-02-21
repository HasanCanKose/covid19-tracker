import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StatisticResponseModel} from '../modules/statistic/models/statistic-response.model';
import {CountryResponseModel} from '../modules/statistic/models/country-response.model';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(private http: HttpClient) { }

  worldStatistics() {
    return this.http.get<StatisticResponseModel>('https://corona.lmao.ninja/v2/all?yesterday');
  }

  countryStatistics(country: string) {
    return this.http.get<CountryResponseModel>(`https://corona.lmao.ninja/v2/countries/${country}?yesterday=true&strict=true&query`);
  }

}
