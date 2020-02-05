import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeformComponent } from './nodeform.component';

describe('NodeformComponent', () => {
  let component: NodeformComponent;
  let fixture: ComponentFixture<NodeformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
