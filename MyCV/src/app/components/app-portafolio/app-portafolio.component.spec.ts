import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPortafolioComponent } from './app-portafolio.component';

describe('AppPortafolioComponent', () => {
  let component: AppPortafolioComponent;
  let fixture: ComponentFixture<AppPortafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPortafolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
