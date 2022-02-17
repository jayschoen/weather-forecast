import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { BehaviorSubject, Subject } from 'rxjs';

import { Address } from '../address';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  lat_long = new Subject<number[]>();

  constructor(
    private httpClient: HttpClient
  ) { }

  addressToLatLong(address: Address) {

    let url = environment.geocodeio_latlong
 
    let addressString = `${address.street} ${address.city} ${address.state} ${address.zip}`;

    let apiKey = environment.geocodio_api_key;

    const params = new HttpParams()
      .set('q', addressString)
      .set('api_key', apiKey);

    return this.httpClient.get( url, {params} );

  }

  gridByLatLong(lat: number, long: number) {
    
    let url = environment.nws_grid + `${lat},${long}/`

    return this.httpClient.get( url );

  }

  forecast(station: string, gridX: number, gridY: number) {

    let url = environment.nws_forecast + `${station}/${gridX},${gridY}/forecast`

    return this.httpClient.get( url );
  }

}
