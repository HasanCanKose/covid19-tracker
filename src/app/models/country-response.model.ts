import {StatisticResponseModel} from './statistic-response.model';

export interface CountryResponseModel extends StatisticResponseModel{
  country: string;
  countryInfo: {
    id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  continent: string;
}
