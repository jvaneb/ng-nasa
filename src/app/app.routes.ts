import { Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { ContentComponent } from './shared/components/layout/content/content.component';
import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [
    {
      path: '',
      component: ContentComponent,
      children: [
        { 
            path: '',
            loadComponent: () => import('./home/home.component').then( m => m.HomeComponent) 
        },
      ]
    }
];

export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(routes, withComponentInputBinding())
    ]
  };