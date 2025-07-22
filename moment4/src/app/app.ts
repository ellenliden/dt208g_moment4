import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from './course.service';
import { Course } from './course.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  searchTerm: string = '';
  sortKey: 'code' | 'coursename' | 'progression' = 'code';
  sortAsc: boolean = true;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
      this.filteredCourses = data;
    });
  }

  onSearch() {
    const term = this.searchTerm.toLowerCase();
    this.filteredCourses = this.courses.filter(
      (course) =>
        course.code.toLowerCase().includes(term) ||
        course.coursename.toLowerCase().includes(term)
    );
    this.sortCourses(this.sortKey, false);
  }

  sortCourses(
    key: 'code' | 'coursename' | 'progression',
    toggle: boolean = true
  ) {
    if (toggle) {
      this.sortAsc = !this.sortAsc;
    }
    this.sortKey = key;
    this.filteredCourses.sort((a, b) => {
      const aVal = a[key].toLowerCase();
      const bVal = b[key].toLowerCase();
      if (aVal < bVal) return this.sortAsc ? -1 : 1;
      if (aVal > bVal) return this.sortAsc ? 1 : -1;
      return 0;
    });
  }
}
