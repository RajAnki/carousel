import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSearchPanelComponent } from './mobile-search-panel.component';

describe('MobileSearchPanelComponent', () => {
  let component: MobileSearchPanelComponent;
  let fixture: ComponentFixture<MobileSearchPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSearchPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSearchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
