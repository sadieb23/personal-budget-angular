import { HttpClient } from '@angular/common/http';
import {Chart} from 'chart.js';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',


})
export class HomepageComponent implements OnInit, AfterViewInit {

  public dataSource = {
    datasets: [
        {
            data: [''],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#98fb98',
                '#ff0000',
                '#9370db',
                '#808080',
            ]
        }
    ],
    labels: ['']
};


  @ViewChild('myChart') chartRef!: ElementRef;
  constructor(private http: HttpClient, private elementRef: ElementRef) { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }


  ngOnInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      for (var i = 0; res.myBudget && i < res.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;
        this.createChart();
    }
    });


  }

  createChart() {
    const ctx = this.chartRef.nativeElement.getContext('2d');
    const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
    })
}
}
