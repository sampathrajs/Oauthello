import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalstepComponent } from './finalstep.component';

describe('FinalstepComponent', () => {
  let component: FinalstepComponent;
  let fixture: ComponentFixture<FinalstepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalstepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalstepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
