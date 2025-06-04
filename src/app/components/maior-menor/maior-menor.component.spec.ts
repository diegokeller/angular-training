import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiorMenorComponent } from './maior-menor.component';

describe('MaiorMenorComponent', () => {
  let component: MaiorMenorComponent;
  let fixture: ComponentFixture<MaiorMenorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaiorMenorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaiorMenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
