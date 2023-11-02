import { Component } from '@angular/core';

import { CoursesService } from '../services/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { Course } from '../model/course';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private cousersService: CoursesService,
    private dialog: MatDialog,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.courses$ = this.cousersService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar os cursos');
        return of([]);
      })
    );
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }
}
