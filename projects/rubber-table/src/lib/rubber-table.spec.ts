import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubberTable } from './rubber-table';

describe('RubberTable', () => {
  let component: RubberTable;
  let fixture: ComponentFixture<RubberTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubberTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubberTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
