import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCategoriasComponent } from './menu-categorias.component';

describe('MenuCategoriasComponent', () => {
  let component: MenuCategoriasComponent;
  let fixture: ComponentFixture<MenuCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit message when pasarCategory is called', () => {
    const spy = spyOn(component.messageEvent, 'emit');
    const section = 'aroma';
    component.pasarCategory(section);
    expect(spy).toHaveBeenCalledWith(section);
  });

  it('should emit message when pasarCategory is called', () => {
    const spy = spyOn(component.messageEvent, 'emit');
    const section = 'apariencia';
    component.pasarCategory(section);
    expect(spy).toHaveBeenCalledWith(section);
  });

  it('should emit message when pasarCategory is called', () => {
    const spy = spyOn(component.messageEvent, 'emit');
    const section = 'sabor';
    component.pasarCategory(section);
    expect(spy).toHaveBeenCalledWith(section);
  });

  it('should emit message when pasarCategory is called', () => {
    const spy = spyOn(component.messageEvent, 'emit');
    const section = 'sensacion';
    component.pasarCategory(section);
    expect(spy).toHaveBeenCalledWith(section);
  });
});
