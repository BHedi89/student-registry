import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Student} from '../interfaces/student';
import {StudentResponse} from '../interfaces/student-response';
import {map} from 'rxjs/operators';
import {AbstractControl, ValidationErrors} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly SERVER_URL = 'https://progmatic.hu/frontend/students';

  private studentSubject: Subject<Student[]>;

  constructor(private http: HttpClient) {
    this.studentSubject = new Subject<Student[]>();
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<StudentResponse>(this.SERVER_URL, {withCredentials: true})
      .pipe(map(resp => resp.students));
  }

  deleteStudent(s: Student): Observable<StudentResponse> {
    return this.http.delete<StudentResponse>(this.SERVER_URL + '?id=' + s.id,
      {withCredentials: true});
  }

  addStudent(s: Student): Observable<StudentResponse> {
    return this.http.post<StudentResponse>(
      this.SERVER_URL,
      {student: s},
      {withCredentials: true}
    );
  }

  genderValidator(control: AbstractControl): ValidationErrors | null {
    return ['female', 'male'].includes(control.value.toLowerCase()) ? null : {invalid: true};
  }

  modifyStudent(id: number, s: Student): Observable<StudentResponse> {
    return this.http.put<StudentResponse>(
      this.SERVER_URL + '?id=' + id,
      {student: s},
      {withCredentials: true}
    );
  }

  refreshStudents(students: Student[]): void {
    this.studentSubject.next(students);
  }
  get refreshObservable(): Observable<Student[]> {
    return this.studentSubject.asObservable();
  }
}
