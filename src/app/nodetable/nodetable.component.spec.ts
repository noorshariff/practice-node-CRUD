import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodetableComponent } from './nodetable.component';

describe('NodetableComponent', () => {
  let component: NodetableComponent;
  let fixture: ComponentFixture<NodetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
