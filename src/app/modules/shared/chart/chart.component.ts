import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'node_modules/chart.js'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @ViewChild('chart', {static: true }) chartRef;

  @Input() dates: string[];
  @Input() cases: number[];
  @Input() label: string;
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
    this.chart();
  }

  chart() {
    return new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: this.dates,
        datasets: [{
          label: this.label,
          data: this.cases,
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
