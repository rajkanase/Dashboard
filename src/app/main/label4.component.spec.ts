import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Label4Component } from './label4.component';

describe('Label4Component', () => {
  let component: Label4Component;
  let fixture: ComponentFixture<Label4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Label4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Label4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
