import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelteredEditModalComponent } from './sheltered-edit-modal.component';

describe('ShelteredEditModalComponent', () => {
  let component: ShelteredEditModalComponent;
  let fixture: ComponentFixture<ShelteredEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShelteredEditModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelteredEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
