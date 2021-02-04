import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../services/student.service';
import {Student} from '../../interfaces/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students2: Student[];

  constructor(private studentService: StudentService) {
    this.students2 = [];
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      s => {
        this.students2 = s;
      });
    this.studentService.refreshObservable.subscribe(students => {
      this.students2 = students;
    });
  }

  delete(s: Student): void {
    this.studentService.deleteStudent(s).subscribe(resp => this.students2 = resp.students);
  }

}
