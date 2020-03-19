import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DCustomizadasComponent } from './d-customizadas.component';

describe('DCustomizadasComponent', () => {
  let component: DCustomizadasComponent;
  let fixture: ComponentFixture<DCustomizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DCustomizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DCustomizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
