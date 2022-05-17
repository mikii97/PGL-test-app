export interface OffersInterface {
    jobs: {
      title: string;
      date: string;
      category: string[];
      location: string;
      country: string;
      region: string;
      reference: string;
      url: string;
    }[];
    count: number;
    limit: number;
    offset: number;
  }
  
  export interface JobOfferInterface {
    title: string;
    date: string;
    category: string[];
    location: string;
    country: string;
    region: string;
    reference: string;
    url: string;
  }