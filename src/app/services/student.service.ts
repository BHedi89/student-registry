import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../interfaces/student';
import {StudentResponse} from '../interfaces/student-response';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly SERVER_URL = 'https://progmatic.hu/frontend/students';

  constructor(private http: HttpClient) { }

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
}
