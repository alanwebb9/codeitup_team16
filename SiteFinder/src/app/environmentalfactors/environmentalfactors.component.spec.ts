import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalfactorsComponent } from './environmentalfactors.component';

describe('EnvironmentalfactorsComponent', () => {
  let component: EnvironmentalfactorsComponent;
  let fixture: ComponentFixture<EnvironmentalfactorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentalfactorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentalfactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
