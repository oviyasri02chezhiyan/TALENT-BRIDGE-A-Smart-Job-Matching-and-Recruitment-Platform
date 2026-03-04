import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './job-details.html',
  styleUrls: ['./job-details.css']
})
export class JobDetailsComponent implements OnInit {

  job = signal<any>(null);

  private allJobs = [
    {
      id: 1,
      title: 'Senior Angular Developer',
      company: 'TechFlow Solutions',
      location: 'Bangalore',
      salary: '18-25 LPA',
      type: 'Full-time',
      postedDate: '1 day ago',
      description: 'Senior level role for building scalable frontend apps.',
      requirements: ['Angular 17+', 'Signals', 'RxJS'],
      benefits: ['Medical Insurance', 'Flexible Work']
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      company: 'Creative Studio',
      location: 'Remote',
      salary: '12-18 LPA',
      type: 'Contract',
      postedDate: '5 hours ago',
      description: 'Looking for a creative mind to lead our design team.',
      requirements: ['Figma', 'Adobe XD', 'Prototyping'],
      benefits: ['Project Bonuses', 'Work from anywhere']
    },
    {
      id: 3,
      title: 'Full Stack Engineer',
      company: 'DataMax Inc',
      location: 'Chennai',
      salary: '20-30 LPA',
      type: 'Full-time',
      postedDate: '3 days ago',
      description: 'End-to-end development role for data intensive platforms.',
      requirements: ['Node.js', 'Angular', 'PostgreSQL'],
      benefits: ['Stock Options', 'Annual Trips']
    },
    {
      id: 4,
      title: 'Data Engineer',
      company: 'Zoom Tech',
      location: 'Chennai',
      salary: '25-30 LPA',
      type: 'Full-time',
      postedDate: '1 hour ago',
      description: 'Building data pipelines and warehousing solutions.',
      requirements: ['Python', 'SQL', 'AWS'],
      benefits: ['Learning Allowance', 'Health Plan']
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const jobId = Number(this.route.snapshot.paramMap.get('id'));
    const selectedJob = this.allJobs.find(job => job.id === jobId);

    if (selectedJob) {
      this.job.set(selectedJob);
    }
  }

  applyNow(): void {
    const currentJob = this.job();
    if (currentJob) {
      alert(`Applied successfully for ${currentJob.company}! 🚀`);
    }
  }
}