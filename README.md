# weather-forecast

A little Angular project to practice with observables.

User enters an address, and the app makes three api calls:

1. contact geocode.io and convert the address to lattitude / longitude
2. pass the lat/long to a National Weather Service api that returns a stationID and grid coordinates
3. pass the stationID and coords to another National Weather Service api endpoint which returns the weather details for the location the user entered initially

*the geocode.io api call requires an api key to work, which has not been committed to this repo... if you're curious, you can sign up for a free account and get your own api key
