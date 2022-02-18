import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrendComponent } from './trend.component';

describe('TrendComponent', () => {
  let component: TrendComponent;
  let fixture: ComponentFixture<TrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the trend', () => {
    const fixture = TestBed.createComponent(TrendComponent);
    const Trend = fixture.componentInstance;
    expect(Trend).toBeTruthy();
  });
});
