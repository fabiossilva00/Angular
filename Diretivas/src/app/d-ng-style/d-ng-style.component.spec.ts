import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DNgStyleComponent } from './d-ng-style.component';

describe('DNgStyleComponent', () => {
  let component: DNgStyleComponent;
  let fixture: ComponentFixture<DNgStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DNgStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
