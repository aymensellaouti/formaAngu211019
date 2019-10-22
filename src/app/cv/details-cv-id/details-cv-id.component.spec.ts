import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCvIdComponent } from './details-cv-id.component';

describe('DetailsCvIdComponent', () => {
  let component: DetailsCvIdComponent;
  let fixture: ComponentFixture<DetailsCvIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCvIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCvIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
