import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Student} from '../../interfaces/student';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../../services/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modify-modal',
  templateUrl: './modify-modal.component.html',
  styleUrls: ['./modify-modal.component.scss']
})
export class ModifyModalComponent implements OnInit {

  @Input()
  student: Student;

  studentForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private studentService: StudentService, private router: Router) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.studentForm = new FormGroup({
      name: new FormControl(this.student.name, Validators.required),
      email: new FormControl(this.student.email, [Validators.email, Validators.required]),
      age: new FormControl(this.student.age, [ Validators.min(18), Validators.max(120), Validators.required ]),
      gender: new FormControl(this.student.gender, this.studentService.genderValidator),
    });
  }

  submit(): boolean {
    if (this.studentForm.valid) {
      this.studentService.modifyStudent(this.student.id, this.studentForm.value).subscribe(response => {
        this.studentService.refreshStudents(response.students);
        this.activeModal.close();
      });
    } else {
      return false;
    }
  }
}
