import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chart() {
    return new Chart('my-chart', {
      type: 'bar',
      data: {
        labels: [1, 2],
        datasets: [{
          label: 'cases',
          data: [1, 2],

          borderWidth: 1
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
