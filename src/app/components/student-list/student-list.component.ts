import {Component, OnDestroy, OnInit} from '@angular/core';
import {StudentService} from '../../services/student.service';
import {Student} from '../../interfaces/student';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit, OnDestroy {

  students2: Student[];

  constructor(private studentService: StudentService) {
    this.students2 = [];
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      s => {
        this.students2 = s;
      });
    this.refreshSubscription = this.studentService.refreshObservable.subscribe(students => {
      this.students2 = students;
    });
  }

  ngOnDestroy(): void {
    this.refreshSubscription.unsubscribe();
  }

  delete(s: Student): void {
    this.studentService.deleteStudent(s).subscribe(resp => this.students2 = resp.students);
  }

}
