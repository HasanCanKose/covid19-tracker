import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {StatisticService} from '../../../services/statistic.service';
import {map} from 'rxjs/operators';
import {CountryResponseModel} from '../../../models/country-response.model';
import {log} from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  countryName: string;
  country: [CountryResponseModel];

  constructor(private router: Router, private route: ActivatedRoute, private statisticService: StatisticService) { }

  ngOnInit(): void {
    this.statisticService.countryNames().subscribe(country => {
      this.country = country;
  });
  }


  onSubmit() {
    if(this.countryName) {
      this.statisticService.country$.next(this.countryName);
      this.router.navigate([`countries/${this.countryName}`], {relativeTo: this.route})
        .then(result => console.log(result))
        .catch(error => {
        console.log(error);
      });
    }
  }

  onNavigate() {
    this.router.navigate(['home']);
  }
}
