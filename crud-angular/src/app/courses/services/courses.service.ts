import { HttpClient } from '@angular/common/http';
import { Course } from './../models/courses-models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {




  list(): Course[] {
    return [
      { id: '123e4567-e89b-12d3-a456-426614174000', name: 'Angular Basics', category: 'Frontend' },
      { id: '123e4567-e89b-12d3-a456-426614174001', name: 'React Essentials', category: 'Frontend' },
      { id: '123e4567-e89b-12d3-a456-426614174002', name: 'Node.js for Beginners', category: 'Backend' },
      { id: '123e4567-e89b-12d3-a456-426614174003', name: 'CSS Mastery', category: 'Frontend' },
    ];
  }

}
