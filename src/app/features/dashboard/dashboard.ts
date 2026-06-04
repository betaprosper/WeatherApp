import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastCard } from './forecast-card/forecast-card';
import { HighlightCard } from './highlight-card/highlight-card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ForecastCard, HighlightCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  @Input() unit: 'C' | 'F' = 'C';
  @Input() forecast: any = null;
  @Input() currentWeather: any = null;

  get hourlyList() {
    if (!this.forecast) return [];
    return this.forecast.list.slice(0, 8);
  }

  get fiveDayList() {
    if (!this.forecast) return [];
    // one entry per day at 12:00
    return this.forecast.list
      .filter((item: any) => item.dt_txt?.includes('12:00:00'))
      .slice(0, 5);
  }

  get highlights() {
    if (!this.currentWeather) return null;
    return {
      wind: this.currentWeather.wind?.speed,
      windDir: this.currentWeather.wind?.deg,
      humidity: this.currentWeather.main?.humidity,
      visibility: (this.currentWeather.visibility || 0) / 1000,
      pressure: this.currentWeather.main?.pressure
    };
  }

  getIconUrl(icon: string) {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  getDay(dtTxt: string) {
    const date = new Date(dtTxt);
    const today = new Date();
    if (date.toDateString() === today.toDateString()) return 'Today';
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  }

  getMaxTemp() {
    if (!this.forecast) return 0;
    return Math.max(...this.forecast.list.map((i: any) => i.main?.temp_max || 0));
  }

  getBarWidth(temp: number) {
    const max = this.getMaxTemp();
    return max > 0 ? (temp / max) * 100 : 0;
  }
}