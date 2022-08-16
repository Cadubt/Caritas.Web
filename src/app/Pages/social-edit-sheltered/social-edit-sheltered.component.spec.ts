import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialEditShelteredComponent } from './social-edit-sheltered.component';

describe('SocialEditShelteredComponent', () => {
  let component: SocialEditShelteredComponent;
  let fixture: ComponentFixture<SocialEditShelteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialEditShelteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialEditShelteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
