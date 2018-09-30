import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchFormComponent } from './pitch-form.component';

describe('PitchFormComponent', () => {
  let component: PitchFormComponent;
  let fixture: ComponentFixture<PitchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
