import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerScreenComponent } from './container-screen.component';

describe('ContainerScreenComponent', () => {
  let component: ContainerScreenComponent;
  let fixture: ComponentFixture<ContainerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
