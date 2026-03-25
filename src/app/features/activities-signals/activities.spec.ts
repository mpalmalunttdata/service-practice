import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesSignalsComponent } from './activities';

describe('ActivitiesSignalsComponent', () => {
  let component: ActivitiesSignalsComponent;
  let fixture: ComponentFixture<ActivitiesSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitiesSignalsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivitiesSignalsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
