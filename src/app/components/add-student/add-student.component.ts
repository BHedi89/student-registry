import { Component, OnInit } from '@angular/core';
import {Student} from '../../interfaces/student';
import {StudentService} from '../../services/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  s: Student;
  nameValid: boolean;
  ageValid: boolean;
  emailValid: boolean;
  emailRegexp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  constructor(private studentService: StudentService, private router: Router) {
    this.s = {
      name: '',
      email: '',
      age: null,
      gender: ''
    };
    this.nameValid = true;
    this.ageValid = true;
    this.emailValid = true;
  }

  ngOnInit(): void {
  }

  saveStudent(): void {
    this.nameValid = (this.s.name !== '');
    this.ageValid = this.s.age >= 18 && this.s.age <= 120;
    this.emailValid = this.emailRegexp.test(this.s.email);
    if (this.nameValid && this.emailValid && this.ageValid) {
      this.studentService.addStudent(this.s).subscribe(() => {
        this.router.navigateByUrl('/students');
      });
    }
  }

}
