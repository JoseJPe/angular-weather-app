import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '0aa5ce6fcf0bbb8040adba467ec0efd9';
  URI: string = '';

  constructor( private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }

  getWeather(cityName: string, coutryCode: string) {
    return this.http.get(`${this.URI}${cityName},${coutryCode}`);
  }

}
