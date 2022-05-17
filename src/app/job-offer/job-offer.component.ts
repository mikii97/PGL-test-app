import { Component, Input, OnInit } from '@angular/core';
import { JobOfferInterface } from '../interfaces';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.scss']
})
export class JobOfferComponent implements OnInit {
  @Input('jobOfferData') jobOfferData: JobOfferInterface | undefined  = undefined;
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
