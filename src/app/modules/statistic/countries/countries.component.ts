import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountryResponseModel} from '../../../models/country-response.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  statistics: CountryResponseModel;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => this.statistics = data['statistics']);
  }

  ngOnInit(): void {

  }

}
