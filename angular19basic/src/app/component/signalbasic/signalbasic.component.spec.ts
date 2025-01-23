import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalbasicComponent } from './signalbasic.component';

describe('SignalbasicComponent', () => {
  let component: SignalbasicComponent;
  let fixture: ComponentFixture<SignalbasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalbasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
