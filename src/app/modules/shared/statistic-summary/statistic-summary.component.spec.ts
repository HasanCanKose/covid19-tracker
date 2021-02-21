import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticSummaryComponent } from './statistic-summary.component';

describe('StatisticSummaryComponent', () => {
  let component: StatisticSummaryComponent;
  let fixture: ComponentFixture<StatisticSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
