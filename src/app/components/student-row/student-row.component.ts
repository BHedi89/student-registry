import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../../interfaces/student';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModifyModalComponent} from '../modify-modal/modify-modal.component';

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

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  deleteEvent(): void {
    this.delete.emit();
  }

  openModifyModal(): void {
    const modalRef = this.modalService.open(ModifyModalComponent);
    modalRef.componentInstance.student = this.student;
  }
}
