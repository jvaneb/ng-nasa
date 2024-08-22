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
        {
          path: 'blog-detail/:date',
          loadComponent: () => import('./blog-detail/blog-detail.component').then( m => m.BlogDetailComponent)
        }
      ]
    }
];

export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(routes, withComponentInputBinding())
    ]
  };