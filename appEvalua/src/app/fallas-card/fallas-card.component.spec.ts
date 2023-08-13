import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallasCardComponent } from './fallas-card.component';

describe('FallasCardComponent', () => {
  let component: FallasCardComponent;
  let fixture: ComponentFixture<FallasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FallasCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FallasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
