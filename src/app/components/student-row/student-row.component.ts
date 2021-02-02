import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../../interfaces/student';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tr[app-student-row]',
  templateUrl: './student-row.component.html',
  styleUrls: ['./student-row.component.scss']
})
export class StudentRowComponent implements OnInit {

  @Input()
  student: Student;

  @Output()
  delete = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteEvent(): void {
    this.delete.emit();
  }

}
