import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  isLoggedIn = signal(false);
  userRole = signal<string | null>(null);

  constructor(private router: Router) {
    this.loadAuthState();
  }

  loadAuthState() {
    this.isLoggedIn.set(localStorage.getItem('isLoggedIn') === 'true');
    this.userRole.set(localStorage.getItem('userRole'));
  }

  onSearch(term: string) {
    const search = term.trim();
    if (!search) return;

    this.router.navigate(['/jobs'], {
      queryParams: { q: search }
    });
  }

  toggleLogin() {
    if (this.isLoggedIn()) {
      localStorage.clear();
      this.isLoggedIn.set(false);
      this.userRole.set(null);
    }

    this.router.navigate(['/auth/login']);
  }
}