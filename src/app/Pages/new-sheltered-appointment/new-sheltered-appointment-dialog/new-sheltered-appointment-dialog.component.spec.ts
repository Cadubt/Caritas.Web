import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShelteredAppointmentDialogComponent } from './new-sheltered-appointment-dialog.component';

describe('NewShelteredAppointmentDialogComponent', () => {
  let component: NewShelteredAppointmentDialogComponent;
  let fixture: ComponentFixture<NewShelteredAppointmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewShelteredAppointmentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShelteredAppointmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
