// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  geocodeio_latlong: 'https://api.geocod.io/v1.7/geocode', //?api_key=<key>&q=<address>'

  // TODO: the geocodio request should be done by a server so we can hide the api key
  geocodio_api_key: '',
  // ######

  nws_grid: 'https://api.weather.gov/points/',
  nws_forecast: 'https://api.weather.gov/gridpoints/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
 import 'zone.js/dist/zone-error';  // Included with Angular CLI.
