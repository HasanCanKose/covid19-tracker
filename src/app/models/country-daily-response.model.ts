export interface CountryDailyResponseModel {
  country: string;
  province: [];
  timeline: {
    cases: {[key: string]: number},
    deaths: {[key: string]: number},
    recovered: {[key: string]: number},
  }
}
