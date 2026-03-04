import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-filter.html',
  styleUrls: ['./job-filter.css']
})
export class JobFilter {

  @Output() filterChanged = new EventEmitter<any>();

  locations = ['Bangalore', 'Chennai', 'Hyderabad', 'Remote', 'Mumbai'];
  jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];

  selectedFilters = {
    locations: [] as string[],
    types: [] as string[]
  };

  onLocationChange(location: string, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;

    if (checked) {
      this.selectedFilters.locations.push(location);
    } else {
      this.selectedFilters.locations =
        this.selectedFilters.locations.filter(l => l !== location);
    }
  }

  onTypeChange(type: string, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;

    if (checked) {
      this.selectedFilters.types.push(type);
    } else {
      this.selectedFilters.types =
        this.selectedFilters.types.filter(t => t !== type);
    }
  }

  applyFilters(): void {
    this.filterChanged.emit({ ...this.selectedFilters });
  }

  clearFilters(): void {
    this.selectedFilters = { locations: [], types: [] };
    this.filterChanged.emit(this.selectedFilters);
  }
}