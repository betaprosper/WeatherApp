import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  searchQuery: string = '';
  unit: 'C' | 'F' = 'C';

  @Output() search = new EventEmitter<string>();
  @Output() unitChange = new EventEmitter<'C' | 'F'>();

  onSearch() {
    if (this.searchQuery.trim()) {
      this.search.emit(this.searchQuery.trim());
      this.searchQuery = '';
    }
  }

  setUnit(unit: 'C' | 'F') {
    this.unit = unit;
    this.unitChange.emit(unit);
  }
}