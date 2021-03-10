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
  @Input() backgroundColor: string;

  constructor() { }

  ngOnInit(): void {
    this.chart();
  }

  chart() {
    return new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: this.dates,
        datasets: [{
          label: this.label,
          data: this.cases,
          backgroundColor: this.backgroundColor,
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
