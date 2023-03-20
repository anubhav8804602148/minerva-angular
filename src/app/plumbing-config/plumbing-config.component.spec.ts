import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumbingConfigComponent } from './plumbing-config.component';

describe('PlumbingConfigComponent', () => {
  let component: PlumbingConfigComponent;
  let fixture: ComponentFixture<PlumbingConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlumbingConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlumbingConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
