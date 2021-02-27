import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StatisticService} from '../../../services/statistic.service';
import {CountryResponseModel} from '../../../models/country-response.model';
import {NgSelectComponent} from '@ng-select/ng-select';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild(NgSelectComponent) ngSelectComponent: NgSelectComponent;

  countryName: string;
  country: [CountryResponseModel];
  errorMessage: string = 'asdasd';
  isError: boolean;

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
        .then(result => this.isError = false)
        .catch(error => {
        this.errorMessage = error.error.message;
        this.isError = true;
      });
    }
  }

  onNavigate() {
    this.router.navigate(['home']);
    this.ngSelectComponent.handleClearClick();
  }
}
