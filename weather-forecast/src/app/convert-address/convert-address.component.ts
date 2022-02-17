import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { WeatherService } from '../services/weather.service';

import { Address } from '../address';

@Component({
  selector: 'convert-address',
  templateUrl: './convert-address.component.html',
  styleUrls: ['./convert-address.component.css']
})
export class ConvertAddressComponent implements OnInit {

  address: Address = {
    street: '2140 Newport Place NW',
    city: 'Washington',
    state: 'DC',
    zip: '20037'
  };

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {

    this.weatherService.lat_long.pipe(

      mergeMap(
        data => {
          return this.grid(data);
        }),
      mergeMap(
        data => {

          let station = data['properties']['gridId'];
          let gridX = data['properties']['gridX'];
          let gridY = data['properties']['gridY'];
          let coords = [gridX, gridY];

          return this.forecast(station, coords);
        }
      )  
    ).subscribe(
      data => {
        console.log(data);
      },
      error => console.error(error)
    );
  }

  addressToLatLong(address: Address) {

    this.weatherService.addressToLatLong(address).subscribe(
      data => {

        if (data['results'].length > 0) {

          let lat: number = data['results'][0]['location']['lat'];
          let long: number = data['results'][0]['location']['lng'];
          this.weatherService.lat_long.next([lat, long])
        }

      },
      error => console.error(error)
    );

  }

  grid(coords: number[]) {

    return this.weatherService.gridByLatLong(coords[0], coords[1]);
  }

  forecast(station: string, coords: number[]) {
    return this.weatherService.forecast(station, coords[0], coords[1]);
  }
}
