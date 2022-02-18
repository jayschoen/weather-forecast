import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'display-forecast',
  templateUrl: './display-forecast.component.html',
  styleUrls: ['./display-forecast.component.css']
})
export class DisplayForecastComponent implements OnInit {

  forecastData: object = {};

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {

    this.weatherService.forecastData.subscribe(
      data => {
        console.log(data);
        this.forecastData = data;
      },
      error => console.error(error)
    );

  }

  _keyvalue_unsorted(a: any, b: any) {
    return 0;
  }

}
