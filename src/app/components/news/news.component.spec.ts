import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsComponent } from './news.component';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the news', () => {
    const fixture = TestBed.createComponent(NewsComponent);
    const News = fixture.componentInstance;
    expect(News).toBeTruthy();
  });
});
