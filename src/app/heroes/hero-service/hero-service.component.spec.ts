import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroWithServiceComponent } from './hero-service.component';

describe('HeroWithServiceComponent', () => {
  let component: HeroWithServiceComponent;
  let fixture: ComponentFixture<HeroWithServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroWithServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
