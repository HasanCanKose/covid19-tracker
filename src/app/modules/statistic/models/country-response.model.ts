export interface CountryResponseModel {
  country: string;
  countryInfo: {
    id: number;
    iso2: string;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  tests: number;
}
