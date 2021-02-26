import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {StatisticService} from '../../../services/statistic.service';
import {map} from 'rxjs/operators';
import {CountryResponseModel} from '../../../models/country-response.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('form', {static: true}) countryForm: NgForm;
  countryInput;
  country: { Country: string, Slug: string, ISO2: string };
  countryNames: string[];

  constructor(private router: Router, private route: ActivatedRoute, private statisticService: StatisticService) { }

  ngOnInit(): void {
    this.statisticService.countryNames().subscribe(country => {
      this.country = country;
  });
  }


  onSubmit() {
      this.countryInput = this.countryForm.value.countryInput;
      this.router.navigate([`countries/${this.countryInput}`], {relativeTo: this.route});
      this.countryForm.reset();
  }

  onNavigate() {
    this.router.navigate(['home']);
  }
}
