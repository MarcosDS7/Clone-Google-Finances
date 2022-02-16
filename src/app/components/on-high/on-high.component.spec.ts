import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnHighComponent } from './on-high.component';

describe('OnHighComponent', () => {
  let component: OnHighComponent;
  let fixture: ComponentFixture<OnHighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnHighComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the on high', () => {
    const fixture = TestBed.createComponent(OnHighComponent);
    const OnHigh = fixture.componentInstance;
    expect(OnHigh).toBeTruthy();
  });
});
