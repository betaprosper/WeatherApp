import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherComponent } from './current-weather/current-weather';
import { CityCardComponent } from './city-card/city-card';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, CurrentWeatherComponent, CityCardComponent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {
  @Input() unit: 'C' | 'F' = 'C';
  @Input() currentWeather: any = null;
  @Input() otherCities: any[] = [];  // ← remove hardcoded cities array
}