import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-highlight-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './highlight-card.html',
  styleUrl: './highlight-card.css'
})
export class HighlightCard {
  @Input() label: string = '';
  @Input() value: number = 0;
  @Input() unit: string = '';
  @Input() icon: string = '';
}