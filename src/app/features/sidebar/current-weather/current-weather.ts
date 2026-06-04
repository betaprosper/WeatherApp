import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-weather.html',
  styleUrl: './current-weather.css'
})
export class CurrentWeatherComponent {
  @Input() unit: 'C' | 'F' = 'C';
  @Input() data: any = null;         // ← receives real API data

  get temp() {
    return this.data ? Math.round(this.data.main.temp) : '--';
  }
  get city() {
    return this.data ? this.data.name : '--';
  }
  get condition() {
    return this.data ? this.data.weather[0].description : '--';
  }
  get windSpeed() {
    return this.data ? this.data.wind.speed : '--';
  }
  get feelsLike() {
    return this.data ? Math.round(this.data.main.feels_like) : '--';
  }
  get minTemp() {
    return this.data ? Math.round(this.data.main.temp_min) : '--';
  }
  get maxTemp() {
    return this.data ? Math.round(this.data.main.temp_max) : '--';
  }
  get iconUrl() {
    return this.data
      ? `https://openweathermap.org/img/wn/${this.data.weather[0].icon}@2x.png`
      : '';
  }
  get time() {
    return this.data
      ? new Date(this.data.dt * 1000).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit'
        })
      : '--';
  }
}