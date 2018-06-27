import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscConComponent } from './insc-con.component';

describe('InscConComponent', () => {
  let component: InscConComponent;
  let fixture: ComponentFixture<InscConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
