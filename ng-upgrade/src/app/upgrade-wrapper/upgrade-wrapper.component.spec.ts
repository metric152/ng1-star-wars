import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeWrapperComponent } from './upgrade-wrapper.component';

describe('UpgradeWrapperComponent', () => {
  let component: UpgradeWrapperComponent;
  let fixture: ComponentFixture<UpgradeWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
