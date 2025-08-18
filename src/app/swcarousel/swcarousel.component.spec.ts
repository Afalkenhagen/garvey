import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwcarouselComponent } from './swcarousel.component';

describe('SwcarouselComponent', () => {
  let component: SwcarouselComponent;
  let fixture: ComponentFixture<SwcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwcarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
