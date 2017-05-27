import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiroNgGCComponent } from './meu-primeiro-ng-g-c.component';

describe('MeuPrimeiroNgGCComponent', () => {
  let component: MeuPrimeiroNgGCComponent;
  let fixture: ComponentFixture<MeuPrimeiroNgGCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuPrimeiroNgGCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPrimeiroNgGCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
