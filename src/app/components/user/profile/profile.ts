import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile {

  userProfile = signal({
    name: 'Oviya',
    email: 'oviya@developer.com',
    role: 'Senior Angular Developer',
    location: 'Chennai, Tamil Nadu',
    bio: 'Building high-performance apps with Angular and passion! Dedicated to clean code and pixel-perfect UI. 🚀',
    skills: ['Angular', 'TypeScript', 'Tailwind CSS', 'Firebase', 'RxJS', 'Signals'],
    portfolio: 'https://github.com/oviya-dev'
  });

  isEditing = signal(false);
  selectedFileName = signal<string | null>(null);

  toggleEdit() {
    this.isEditing.set(!this.isEditing());
  }

  saveProfile() {
    this.isEditing.set(false);
    console.log('Profile saved:', this.userProfile());
    alert('Profile updated successfully ✅');
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      this.selectedFileName.set(file.name);

      console.log('Selected file:', file.name);
      console.log('File size:', (file.size / 1024).toFixed(2) + ' KB');

      alert(file.name + ' Please upload it ✅');
    }
  }
}