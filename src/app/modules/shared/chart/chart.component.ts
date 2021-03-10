import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Chart} from 'node_modules/chart.js'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {

  @ViewChild('chart', {static: true }) chartRef;

  @Input() dates: string[];
  @Input() cases: number[];
  @Input() label: string;
  @Input() type: string;
  @Input() backgroundColor: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.chartRef.nativeElement);

    this.chart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.cases && !changes.cases.firstChange){
      this.chart();
    }
  }

  chart() {

    const canvas = document.createElement('canvas');
    this.chartRef.nativeElement.innerHTML = '';
    this.chartRef.nativeElement.appendChild(canvas);
    return new Chart(this.chartRef.nativeElement.children[0], {
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
