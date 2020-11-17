import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecktComponent } from './projeckt.component';

describe('ProjecktComponent', () => {
  let component: ProjecktComponent;
  let fixture: ComponentFixture<ProjecktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjecktComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjecktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
