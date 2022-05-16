import { Component, OnInit } from '@angular/core';
import { JobOfferService } from './services/job-offer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PGL-test-app';

  constructor(private jobOfferService: JobOfferService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.jobOfferService.getDataFromLocalApi();
  }
}
