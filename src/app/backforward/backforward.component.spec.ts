import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackforwardComponent } from './backforward.component';

describe('BackforwardComponent', () => {
  let component: BackforwardComponent;
  let fixture: ComponentFixture<BackforwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackforwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackforwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
