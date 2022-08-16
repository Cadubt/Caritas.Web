import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShelteredDialogComponent } from './new-sheltered-dialog.component';

describe('NewShelteredDialogComponent', () => {
  let component: NewShelteredDialogComponent;
  let fixture: ComponentFixture<NewShelteredDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewShelteredDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShelteredDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
