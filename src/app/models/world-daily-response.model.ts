export interface WorldDailyResponseModel {
  cases: {[key: string]: number},
  deaths: {[key: string]: number},
  recovered: {[key: string]: number},
}
