import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private api = 'https://api.openweathermap.org/data/2.5';
  private key = '539a565d427aa9f3429ec40c1ff30e24'; // This is my api key
  constructor(private http: HttpClient) {}

  getWeatherByCoords(lat: number, lon: number): Observable<any> {
    return this.http.get(
      `${this.api}/weather?lat=${lat}&lon=${lon}&appid=${this.key}&units=metric`
    );
  }

  getWeatherByCity(city: string): Observable<any> {
    return this.http.get(
      `${this.api}/weather?q=${city}&appid=${this.key}&units=metric`
    );
  }

  getForecastByCoords(lat: number, lon: number): Observable<any> {
    return this.http.get(
      `${this.api}/forecast?lat=${lat}&lon=${lon}&appid=${this.key}&units=metric`
    );
  }

  getForecastByCity(city: string): Observable<any> {
    return this.http.get(
      `${this.api}/forecast?q=${city}&appid=${this.key}&units=metric`
    );
  }

  getWeatherForCities(cities: string[]): Observable<any[]> {
    const requests = cities.map(city => this.getWeatherByCity(city));
    return forkJoin(requests);
  }
}