import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsMainComponent } from './gifs-main.component';

describe('GifsMainComponent', () => {
  let component: GifsMainComponent;
  let fixture: ComponentFixture<GifsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
