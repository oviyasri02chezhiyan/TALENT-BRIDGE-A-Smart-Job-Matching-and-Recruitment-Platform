import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-job',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-job.html',
  styleUrls: ['./post-job.css']
})
export class PostJobComponent {

  constructor(private location: Location) {}

  jobForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    company: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    jobType: new FormControl('Full-time', Validators.required),
    salary: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.minLength(20)])
  });

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    if (this.jobForm.invalid) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('New Job Data:', this.jobForm.value);
    alert('Job posted successfully 🎉');
    this.jobForm.reset({ jobType: 'Full-time' });
  }
}