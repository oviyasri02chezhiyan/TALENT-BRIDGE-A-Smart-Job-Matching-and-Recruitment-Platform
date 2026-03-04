import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
}

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './job-card.html',
  styleUrls: ['./job-card.css']
})
export class JobCardComponent {

  @Input() job!: Job;
  @Input() isAdmin = false;

}