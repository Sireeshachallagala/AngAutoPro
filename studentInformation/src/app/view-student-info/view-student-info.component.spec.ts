import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentInfoComponent } from './view-student-info.component';

describe('ViewStudentInfoComponent', () => {
  let component: ViewStudentInfoComponent;
  let fixture: ComponentFixture<ViewStudentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStudentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
