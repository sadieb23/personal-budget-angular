import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchDataIfNeeded().subscribe(() => {
      // Code to initialize or update charts using the data
    });
  }

  // Example method to access data from the service
  getData(): any {
    return this.dataService.getData();
  }
}
