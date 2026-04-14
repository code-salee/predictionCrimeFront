import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCrimeComponent } from './view-crime.component';

describe('ViewCrimeComponent', () => {
  let component: ViewCrimeComponent;
  let fixture: ComponentFixture<ViewCrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCrimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
