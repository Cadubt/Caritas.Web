import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordVisitDialogComponent } from './record-visit-dialog.component';

describe('RecordVisitDialogComponent', () => {
  let component: RecordVisitDialogComponent;
  let fixture: ComponentFixture<RecordVisitDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordVisitDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordVisitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
