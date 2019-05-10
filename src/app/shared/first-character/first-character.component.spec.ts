import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCharacterComponent } from './first-character.component';

describe('FirstCharacterComponent', () => {
  let component: FirstCharacterComponent;
  let fixture: ComponentFixture<FirstCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
