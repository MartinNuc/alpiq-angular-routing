import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokePageComponent } from './joke-page.component';

describe('JokeComponent', () => {
  let component: JokePageComponent;
  let fixture: ComponentFixture<JokePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
