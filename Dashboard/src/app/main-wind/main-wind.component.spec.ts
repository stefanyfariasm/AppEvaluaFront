import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWindComponent } from './main-wind.component';

describe('MainWindComponent', () => {
  let component: MainWindComponent;
  let fixture: ComponentFixture<MainWindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainWindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainWindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
