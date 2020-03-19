import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DNgContentComponent } from './d-ng-content.component';

describe('DNgContentComponent', () => {
  let component: DNgContentComponent;
  let fixture: ComponentFixture<DNgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DNgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
