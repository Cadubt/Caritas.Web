import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAdvisorComponent } from './social-advisor.component';

describe('SocialAdvisorComponent', () => {
  let component: SocialAdvisorComponent;
  let fixture: ComponentFixture<SocialAdvisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialAdvisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
