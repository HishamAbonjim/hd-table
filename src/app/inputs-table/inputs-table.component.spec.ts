import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsTableComponent } from './inputs-table.component';

describe('InputsTableComponent', () => {
  let component: InputsTableComponent;
  let fixture: ComponentFixture<InputsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
