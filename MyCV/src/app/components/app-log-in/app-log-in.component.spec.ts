import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLogInComponent } from './app-log-in.component';

describe('AppLogInComponent', () => {
  let component: AppLogInComponent;
  let fixture: ComponentFixture<AppLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLogInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
