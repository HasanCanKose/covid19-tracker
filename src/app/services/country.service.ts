import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  country$ = new ReplaySubject<string>(1);

  constructor() { }
}
