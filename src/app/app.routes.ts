import { Routes, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn) {
    return true;
  }

  return router.createUrlTree(['/auth/login']);
};

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },

  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./components/auth/login/login')
            .then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./components/auth/register/register')
            .then(m => m.RegisterComponent)
      }
    ]
  },

  {
    path: 'jobs',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/jobs/job-list/job-list')
            .then(m => m.JobList)
      },
      {
        path: 'details/:id',
        loadComponent: () =>
          import('./components/jobs/job-details/job-details')
            .then(m => m.JobDetailsComponent)
      }
    ]
  },

  {
    path: 'user',
    canActivate: [authGuard],
    children: [
      {
        path: 'profile',
        loadComponent: () =>
          import('./components/user/profile/profile')
            .then(m => m.Profile)
      }
    ]
  },

  {
    path: 'recruiter',
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./components/recruiter/recruiter-dashboard/recruiter-dashboard')
            .then(m => m.RecruiterDashboardComponent)
      },
      {
        path: 'post-job',
        loadComponent: () =>
          import('./components/recruiter/post-job/post-job')
            .then(m => m.PostJobComponent)
      },
      {
        path: 'manage-jobs',
        loadComponent: () =>
          import('./components/recruiter/manage-jobs/manage-jobs')
            .then(m => m.ManageJobsComponent)
      },
      {
        path: 'applicants-list',
        loadComponent: () =>
          import('./components/recruiter/applicants-list/applicants-list')
            .then(m => m.ApplicantsListComponent)
      }
    ]
  },

  {
    path: '**',
    redirectTo: 'jobs'
  }

];