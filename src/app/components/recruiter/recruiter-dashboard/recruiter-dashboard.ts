import { Component, signal } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recruiter-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recruiter-dashboard.html',
  styleUrls: ['./recruiter-dashboard.css']
})
export class RecruiterDashboardComponent {

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

  totalJobs = signal(12);
  totalApplicants = signal(145);
  pendingReviews = signal(24);

  recentApplicants = signal([
    { id: 1, name: 'Sathish Kumar', role: 'Angular Dev', time: '2 hours ago' },
    { id: 2, name: 'Rithika S', role: 'UI Designer', time: '5 hours ago' },
    { id: 3, name: 'Vijay Mani', role: 'Full Stack', time: 'Yesterday' }
  ]);
}