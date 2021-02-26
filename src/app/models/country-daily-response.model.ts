export interface CountryDailyResponseModel {
  country: string;
  provinces: [];
  timeline: {
    cases: {[key:string]:number},
    deaths: {[key:string]:number},
    recovered: {[key:string]:number},
  }
}
