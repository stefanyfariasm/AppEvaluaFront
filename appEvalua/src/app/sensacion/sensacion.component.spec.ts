import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensacionComponent } from './sensacion.component';

describe('SensacionComponent', () => {
  let component: SensacionComponent;
  let fixture: ComponentFixture<SensacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
