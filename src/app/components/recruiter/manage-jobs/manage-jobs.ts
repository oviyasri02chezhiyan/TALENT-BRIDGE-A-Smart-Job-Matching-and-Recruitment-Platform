import { Component, signal } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Job {
  id: number;
  title: string;
  location: string;
  applicants: number;
  status: 'Active' | 'Closed';
}

@Component({
  selector: 'app-manage-jobs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './manage-jobs.html',
  styleUrls: ['./manage-jobs.css']
})
export class ManageJobsComponent {

  constructor(private location: Location) {}

  postedJobs = signal<Job[]>([
    { id: 1, title: 'Senior Angular Developer', location: 'Chennai', applicants: 12, status: 'Active' },
    { id: 2, title: 'UI/UX Designer', location: 'Remote', applicants: 5, status: 'Active' },
    { id: 3, title: 'Python Intern', location: 'Bangalore', applicants: 45, status: 'Closed' }
  ]);

  goBack(): void {
    this.location.back();
  }

  deleteJob(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this job?');
    if (!confirmDelete) return;

    this.postedJobs.update(jobs => jobs.filter(job => job.id !== id));
  }

  toggleStatus(id: number): void {
    this.postedJobs.update(jobs =>
      jobs.map(job =>
        job.id === id
          ? { ...job, status: job.status === 'Active' ? 'Closed' : 'Active' }
          : job
      )
    );
  }
}