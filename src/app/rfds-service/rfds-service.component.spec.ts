import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfdsServiceComponent } from './rfds-service.component';

describe('RfdsServiceComponent', () => {
  let component: RfdsServiceComponent;
  let fixture: ComponentFixture<RfdsServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfdsServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfdsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
