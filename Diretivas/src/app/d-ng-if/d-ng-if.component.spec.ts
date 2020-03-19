import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DNgIfComponent } from './d-ng-if.component';

describe('DNgIfComponent', () => {
  let component: DNgIfComponent;
  let fixture: ComponentFixture<DNgIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DNgIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
