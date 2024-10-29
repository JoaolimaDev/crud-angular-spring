import { Routes } from '@angular/router';
import { ReadmeComponent } from './readme/readme/readme.component';

export const routes: Routes = [
  {
    path : '', component  : ReadmeComponent
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: '**',
    component: ReadmeComponent
  },

];
