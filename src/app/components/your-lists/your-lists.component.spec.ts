import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourListsComponent } from './your-lists.component';

describe('YourListsComponent', () => {
  let component: YourListsComponent;
  let fixture: ComponentFixture<YourListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YourListsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the your lists', () => {
    const fixture = TestBed.createComponent(YourListsComponent);
    const YourLists = fixture.componentInstance;
    expect(YourLists).toBeTruthy();
  });
});
