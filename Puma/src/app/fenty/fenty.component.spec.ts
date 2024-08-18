import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FentyComponent } from './fenty.component';

describe('FentyComponent', () => {
  let component: FentyComponent;
  let fixture: ComponentFixture<FentyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FentyComponent]
    });
    fixture = TestBed.createComponent(FentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
