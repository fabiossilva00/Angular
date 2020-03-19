import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DNgSwitchComponent } from './d-ng-switch.component';

describe('DNgSwitchComponent', () => {
  let component: DNgSwitchComponent;
  let fixture: ComponentFixture<DNgSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DNgSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
