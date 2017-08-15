import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Label3Component } from './label3.component';

describe('Label3Component', () => {
  let component: Label3Component;
  let fixture: ComponentFixture<Label3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Label3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Label3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
