import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConfigurationDialogComponent } from './user-configuration-dialog.component';

describe('UserConfigurationDialogComponent', () => {
  let component: UserConfigurationDialogComponent;
  let fixture: ComponentFixture<UserConfigurationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserConfigurationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConfigurationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
