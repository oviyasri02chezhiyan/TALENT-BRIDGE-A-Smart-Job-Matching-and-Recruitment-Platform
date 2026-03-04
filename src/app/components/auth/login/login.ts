import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['user', Validators.required]
  });

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const email = this.loginForm.get('email')?.value ?? '';
    const role = this.loginForm.get('role')?.value ?? 'user';

    

    localStorage.setItem('userRole', role);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);

    if (role === 'recruiter') {
      this.router.navigate(['/recruiter/dashboard']);
    } else {
      this.router.navigate(['/jobs']);
    }
  }
}