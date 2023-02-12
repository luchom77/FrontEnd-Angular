import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAboutMeComponent } from './app-about-me.component';

describe('AppAboutMeComponent', () => {
  let component: AppAboutMeComponent;
  let fixture: ComponentFixture<AppAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAboutMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
