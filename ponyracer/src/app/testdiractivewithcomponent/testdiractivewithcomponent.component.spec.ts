import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdiractivewithcomponentComponent } from './testdiractivewithcomponent.component';

describe('TestdiractivewithcomponentComponent', () => {
  let component: TestdiractivewithcomponentComponent;
  let fixture: ComponentFixture<TestdiractivewithcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestdiractivewithcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestdiractivewithcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
