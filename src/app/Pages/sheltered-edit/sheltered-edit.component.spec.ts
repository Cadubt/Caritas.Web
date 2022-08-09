import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelteredEditComponent } from './sheltered-edit.component';

describe('ShelteredEditComponent', () => {
  let component: ShelteredEditComponent;
  let fixture: ComponentFixture<ShelteredEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShelteredEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelteredEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
