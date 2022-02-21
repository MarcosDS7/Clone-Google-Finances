import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FollowedComponent } from './followed.component';

describe('FollowedComponent', () => {
  let component: FollowedComponent;
  let fixture: ComponentFixture<FollowedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FollowedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the followed', () => {
    const fixture = TestBed.createComponent(FollowedComponent);
    const Followed = fixture.componentInstance;
    expect(Followed).toBeTruthy();
  });
});
