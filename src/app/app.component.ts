import { Component, HostBinding, Inject, OnInit, Renderer2 } from '@angular/core';
import { JobOfferService } from './services/job-offer.service';
import { OFFERS } from './api/mock-api';
import { OffersInterface } from './interfaces';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Job Offers';
  offers: OffersInterface[];
  isDark = true;

  @HostBinding('class')
  get themeMode() {
    return this.isDark ? 'theme-dark' : 'theme-light';
  }

  constructor(private jobOfferService: JobOfferService, @Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {
    this.offers = OFFERS;
  }

  ngOnInit(): void {
    this.renderer.setAttribute(this.document.body, 'class', 'theme-dark');
    this.getData();
  }

  getData() {
    //this.jobOfferService.getData(); 
  }

  switchTheme() {
    this.isDark = !this.isDark;
    const hostClass = this.isDark ? 'theme-dark' : 'theme-light';
    this.renderer.setAttribute(this.document.body, 'class', hostClass);
  }
}
