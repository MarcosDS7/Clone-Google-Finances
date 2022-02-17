import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourWalletsComponent } from './your-wallets.component';

describe('YourWalletsComponent', () => {
  let component: YourWalletsComponent;
  let fixture: ComponentFixture<YourWalletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YourWalletsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourWalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the your wallets', () => {
    const fixture = TestBed.createComponent(YourWalletsComponent);
    const YourWallets = fixture.componentInstance;
    expect(YourWallets).toBeTruthy();
  });
});
