import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBebidaComponent } from './tipo-bebida.component';

describe('TipoBebidaComponent', () => {
  let component: TipoBebidaComponent;
  let fixture: ComponentFixture<TipoBebidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoBebidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoBebidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
