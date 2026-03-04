import { Component, signal } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

interface Applicant {
  id: number;
  name: string;
  role: string;
  experience: string;
  email: string;
  status: 'Pending' | 'Shortlisted' | 'Rejected';
}

@Component({
  selector: 'app-applicants-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './applicants-list.html',
  styleUrls: ['./applicants-list.css']
})
export class ApplicantsListComponent {

  constructor(private location: Location) {}

  applicants = signal<Applicant[]>([
    {
      id: 101,
      name: 'Arun Kumar',
      role: 'Angular Developer',
      experience: '3 Years',
      email: 'arun@email.com',
      status: 'Pending'
    },
    {
      id: 102,
      name: 'Priya Dharshini',
      role: 'UI/UX Designer',
      experience: '2 Years',
      email: 'priya@email.com',
      status: 'Shortlisted'
    },
    {
      id: 103,
      name: 'Sathish Root',
      role: 'Full Stack Engineer',
      experience: '5 Years',
      email: 'sathish@email.com',
      status: 'Pending'
    }
  ]);

  goBack(): void {
    this.location.back();
  }

  updateStatus(id: number, status: 'Shortlisted' | 'Rejected'): void {
    this.applicants.update(list =>
      list.map(applicant =>
        applicant.id === id
          ? { ...applicant, status }
          : applicant
      )
    );
  }
}