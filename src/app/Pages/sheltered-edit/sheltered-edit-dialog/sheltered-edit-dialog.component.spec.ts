import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelteredEditDialogComponent } from './sheltered-edit-dialog.component';

describe('ShelteredEditDialogComponent', () => {
  let component: ShelteredEditDialogComponent;
  let fixture: ComponentFixture<ShelteredEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShelteredEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelteredEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
