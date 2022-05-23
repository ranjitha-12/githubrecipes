import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReceipeComponent } from './my-receipe.component';

describe('MyReceipeComponent', () => {
  let component: MyReceipeComponent;
  let fixture: ComponentFixture<MyReceipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyReceipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReceipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
