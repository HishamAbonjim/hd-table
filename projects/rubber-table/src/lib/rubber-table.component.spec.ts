import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubberTableComponent } from './rubber-table.component';

describe('RubberTableComponent', () => {
  let component: RubberTableComponent;
  let fixture: ComponentFixture<RubberTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubberTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubberTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
