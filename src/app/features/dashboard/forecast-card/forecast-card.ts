import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forecast-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast-card.html',
  styleUrl: './forecast-card.css'
})
export class ForecastCard {
  @Input() day: string = '';
  @Input() icon: string = '';
  @Input() condition: string = '';
  @Input() temp: number = 0;
  @Input() barWidth: number = 0;
}