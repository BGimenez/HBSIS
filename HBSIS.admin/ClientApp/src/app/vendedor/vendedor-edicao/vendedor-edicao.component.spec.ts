import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorEdicaoComponent } from './vendedor-edicao.component';

describe('VendedorEdicaoComponent', () => {
  let component: VendedorEdicaoComponent;
  let fixture: ComponentFixture<VendedorEdicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorEdicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
