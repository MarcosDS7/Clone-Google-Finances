import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterestComponent } from './interest.component';

describe('InterestComponent', () => {
  let component: InterestComponent;
  let fixture: ComponentFixture<InterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the interest', () => {
    const fixture = TestBed.createComponent(InterestComponent);
    const Interest = fixture.componentInstance;
    expect(Interest).toBeTruthy();
  });
});
