import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgMapTemplateSlComponent } from './svg-map-template-sl.component';

describe('SvgMapTemplateSlComponent', () => {
  let component: SvgMapTemplateSlComponent;
  let fixture: ComponentFixture<SvgMapTemplateSlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgMapTemplateSlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgMapTemplateSlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
