import { Component, OnInit } from '@angular/core';
import { JobOfferService } from './services/job-offer.service';
import { OFFERS } from './api/mock-api';
import { OffersInterface } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Job Offers';
  offers: OffersInterface[];

  constructor(private jobOfferService: JobOfferService) {
    this.offers = OFFERS;
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    //this.jobOfferService.getData(); 
  }
}
