import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, // Adjust if you have a home component
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page
];
