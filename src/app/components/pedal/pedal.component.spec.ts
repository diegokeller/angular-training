import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedalComponent } from './pedal.component';

describe('PedalComponent', () => {
  let component: PedalComponent;
  let fixture: ComponentFixture<PedalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
