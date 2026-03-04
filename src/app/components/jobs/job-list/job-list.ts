import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { JobFilter } from '../job-filter/job-filter';
import { JobCardComponent } from '../../shared/job-card/job-card';
import { LoaderComponent } from '../../shared/loader/loader';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, JobFilter, JobCardComponent, LoaderComponent],
  templateUrl: './job-list.html',
  styleUrls: ['./job-list.css']
})
export class JobList implements OnInit {

  isLoading = signal(true);
  jobs = signal<any[]>([]);
  currentSearchTerm = '';

  private allJobs = [
    { id: 1, title: 'Senior Angular Developer', company: 'TechFlow Solutions', location: 'Bangalore', salary: '18-25', type: 'Full-time', posted: '1 day ago' },
    { id: 2, title: 'UI/UX Designer', company: 'Creative Studio', location: 'Remote', salary: '12-18', type: 'Contract', posted: '5 hours ago' },
    { id: 3, title: 'Full Stack Engineer', company: 'DataMax Inc', location: 'Chennai', salary: '20-30', type: 'Full-time', posted: '3 day ago' },
    { id: 4, title: 'Data Engineer', company: 'Zoom Tech', location: 'Chennai', salary: '25-30', type: 'Full-time', posted: '1 hour ago' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentSearchTerm = params['q'] || '';
      this.applyFilters();
    });
  }

  applyFilters(filters?: any): void {
    this.isLoading.set(true);

    setTimeout(() => {
      let filteredJobs = [...this.allJobs];

      
      if (this.currentSearchTerm) {
        const term = this.currentSearchTerm.toLowerCase();
        filteredJobs = filteredJobs.filter(job =>
          job.title.toLowerCase().includes(term) ||
          job.company.toLowerCase().includes(term)
        );
      }

      // Sidebar filters
      if (filters) {
        if (filters.locations?.length) {
          filteredJobs = filteredJobs.filter(job =>
            filters.locations.includes(job.location)
          );
        }

        if (filters.types?.length) {
          filteredJobs = filteredJobs.filter(job =>
            filters.types.includes(job.type)
          );
        }
      }

      this.jobs.set(filteredJobs);
      this.isLoading.set(false);

    }, 800);
  }

  handleFilter(filters: any): void {
    this.applyFilters(filters);
  }

  resetFilters(): void {
    this.currentSearchTerm = '';
    this.applyFilters();
  }

  handleSort(event: any): void {
    const sortType = event.target.value;
    const sortedJobs = [...this.jobs()];

    if (sortType === 'Salary: High to Low') {
      sortedJobs.sort((a, b) => {
        const maxA = parseInt(a.salary.split('-')[1]);
        const maxB = parseInt(b.salary.split('-')[1]);
        return maxB - maxA;
      });
    } else {
      sortedJobs.sort((a, b) => b.id - a.id);
    }

    this.jobs.set(sortedJobs);
  }
}