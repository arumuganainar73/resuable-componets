import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittableComponent } from './edittable.component';

describe('EdittableComponent', () => {
  let component: EdittableComponent;
  let fixture: ComponentFixture<EdittableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
