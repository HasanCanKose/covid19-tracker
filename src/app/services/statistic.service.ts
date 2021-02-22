import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StatisticResponseModel} from '../models/statistic-response.model';
import {CountryResponseModel} from '../models/country-response.model';
import {ActivatedRoute} from '@angular/router';
import {WorldResponseModel} from '../models/world-response.model';

@Injectable({
  providedIn: 'root'
})
export class StatisticService implements OnInit{

  country;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.country = params['country']);
  }

  worldStatistics() {
    return this.http.get<WorldResponseModel>('https://corona.lmao.ninja/v2/all?yesterday');
  }

  countryStatistics(country: string) {
    return this.http.get<CountryResponseModel>(`https://corona.lmao.ninja/v2/countries/${country}?yesterday=true&strict=true&query`);
  }

}
