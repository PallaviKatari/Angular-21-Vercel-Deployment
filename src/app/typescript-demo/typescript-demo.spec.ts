import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptDemo } from './typescript-demo';

describe('TypescriptDemo', () => {
  let component: TypescriptDemo;
  let fixture: ComponentFixture<TypescriptDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypescriptDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(TypescriptDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
