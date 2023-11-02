import { Component } from '@angular/core';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses: Course[] = [{ _id: '1', name: 'Angular', category: 'FrontEnd' }];
  displayedColumns = ['name', 'category'];

  constructor(private cousersService: CoursesService) {
    this.courses = this.cousersService.list();
  }
}
