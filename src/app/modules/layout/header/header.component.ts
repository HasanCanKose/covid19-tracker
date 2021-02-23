import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CountryService} from '../../../services/country.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('form', {static: true}) countryForm: NgForm;
  countryInput;

  constructor(private countryService: CountryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
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
