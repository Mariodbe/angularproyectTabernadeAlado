import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'La Taberna de Al Lado | Tapas en Lavapiés'
  },
  {
    path: 'carta',
    loadComponent: () => import('./pages/menu/menu.component').then(m => m.MenuComponent),
    title: 'La Carta | La Taberna de Al Lado'
  },
  {
    path: 'resenas',
    loadComponent: () => import('./pages/reviews/reviews.component').then(m => m.ReviewsComponent),
    title: 'Reseñas | La Taberna de Al Lado'
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contacto | La Taberna de Al Lado'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
