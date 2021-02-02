import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Student} from "../../interfaces/student";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-modify-modal',
  templateUrl: './modify-modal.component.html',
  styleUrls: ['./modify-modal.component.scss']
})
export class ModifyModalComponent implements OnInit {

  @Input()
  student: Student;

  studentForm: FormGroup;

  constructor(public activeModal: NgbActiveModal) {
    this.studentForm = new FormGroup({
      name: new FormControl(this.student.name, Validators.required),
      email: new FormControl(this.student.email, Validators.email),
      age: new FormControl(this.student.age, [ Validators.min(18), Validators.max(120) ]),
      gender: new FormControl(this.student.gender),
    });
  }

  ngOnInit(): void {
  }

}
