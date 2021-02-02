import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StudentRowComponent } from './student-row.component';

describe('StudentRowComponent', () => {
  let component: StudentRowComponent;
  let fixture: ComponentFixture<StudentRowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
