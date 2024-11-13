import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadinTwoComponent } from './loadin-two.component';

describe('LoadinTwoComponent', () => {
  let component: LoadinTwoComponent;
  let fixture: ComponentFixture<LoadinTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadinTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadinTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
