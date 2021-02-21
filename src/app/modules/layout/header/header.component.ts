import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('form', {static: true}) countryForm: NgForm;
  countryInput;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: KeyboardEvent) {
    if(event.keyCode === 13){
      this.countryInput = this.countryForm.value.countryInput;
      alert(this.countryInput);
    }
  }
}
