import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulofComponent } from './modulof.component';

describe('ModulofComponent', () => {
  let component: ModulofComponent;
  let fixture: ComponentFixture<ModulofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
