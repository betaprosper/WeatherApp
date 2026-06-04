import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-card.html',
  styleUrl: './city-card.css'
})
export class CityCardComponent {
  @Input() country: string = '';
  @Input() city: string = '';
  @Input() condition: string = '';
  @Input() temp: number = 0;
  @Input() icon: string = '';
}