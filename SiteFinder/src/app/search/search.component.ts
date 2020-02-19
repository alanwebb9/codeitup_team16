import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  lat: number;
  lng: number;
  zoom:number;
  markers = [
    // These are all just random coordinates from https://www.random.org/geographic-coordinates/
    { lat: 52.6352, lng: 8.6539, alpha: 1 },
    { lat: 52.6632, lng: 8.6170, alpha: 1 },
   /*  { lat: 48.75606, lng: -118.859, alpha: 1 },
    { lat: 5.19334, lng: -67.03352, alpha: 1 },
    { lat: 12.09407, lng: 26.31618, alpha: 1 },
    { lat: 47.92393, lng: 78.58339, alpha: 1 } */
  ];

 
  
  
  

  constructor() { }

  ngOnInit() {
    this.setCurrentLocation();
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }

  private searchLocation() {
    
  }


}
