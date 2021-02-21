import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CountryService} from '../../../services/country.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('form', {static: true}) countryForm: NgForm;
  countryInput;

  constructor(private countryService: CountryService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(event: KeyboardEvent) {
    if(event.keyCode === 13){
      this.countryInput = this.countryForm.value.countryInput;
      this.countryService.country$.next(this.countryInput);
      this.router.navigate([`countries/${this.countryInput}`]);
    }
  }
}
