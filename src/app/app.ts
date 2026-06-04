import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './features/header/header';
import { SidebarComponent } from './features/sidebar/sidebar';
import { Dashboard } from './features/dashboard/dashboard';
import { WeatherService } from './core/services/weather';
import { GeolocationService } from './core/services/geolocation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  unit: 'C' | 'F' = 'C';
  currentWeather: any = null;
  forecast: any = null;
  otherCities: any[] = [];
  loading = true;

  private defaultCities = ['New York', 'Copenhagen', 'Ho Chi Minh City'];

  constructor(
    private weatherService: WeatherService,
    private geoService: GeolocationService
  ) {}

  ngOnInit() {
    this.geoService.getPosition()
      .then(({ lat, lon }) => {
        this.loadWeather(lat, lon);
      })
      .catch(() => {
        // fallback to London if geolocation denied
        this.loadWeatherByCity('London');
      });

    this.weatherService.getWeatherForCities(this.defaultCities)
      .subscribe(data => this.otherCities = data);
  }

  loadWeather(lat: number, lon: number) {
    this.weatherService.getWeatherByCoords(lat, lon)
      .subscribe(data => this.currentWeather = data);

    this.weatherService.getForecastByCoords(lat, lon)
      .subscribe(data => {
        this.forecast = data;
        this.loading = false;
      });
  }

  loadWeatherByCity(city: string) {
    this.weatherService.getWeatherByCity(city)
      .subscribe(data => this.currentWeather = data);

    this.weatherService.getForecastByCity(city)
      .subscribe(data => {
        this.forecast = data;
        this.loading = false;
      });
  }

  onSearch(city: string) {
    this.loading = true;
    this.loadWeatherByCity(city);
  }

  onUnitChange(unit: 'C' | 'F') {
    this.unit = unit;
  }
}