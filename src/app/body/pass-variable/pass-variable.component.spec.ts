import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassVariableComponent } from './pass-variable.component';

describe('PassVariableComponent', () => {
  let component: PassVariableComponent;
  let fixture: ComponentFixture<PassVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassVariableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
