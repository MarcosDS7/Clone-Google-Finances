import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrendMarketComponent } from './trend-market.component';

describe('TrendMarketComponent', () => {
  let component: TrendMarketComponent;
  let fixture: ComponentFixture<TrendMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrendMarketComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the trend market', () => {
    const fixture = TestBed.createComponent(TrendMarketComponent);
    const TrendMarket = fixture.componentInstance;
    expect(TrendMarket).toBeTruthy();
  });
});
