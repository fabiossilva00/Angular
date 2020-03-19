import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DNgClassComponent } from './d-ng-class.component';

describe('DNgClassComponent', () => {
  let component: DNgClassComponent;
  let fixture: ComponentFixture<DNgClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DNgClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
