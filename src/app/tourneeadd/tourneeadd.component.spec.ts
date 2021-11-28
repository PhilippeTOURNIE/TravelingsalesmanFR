import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourneeaddComponent } from './tourneeadd.component';

describe('TourneeaddComponent', () => {
  let component: TourneeaddComponent;
  let fixture: ComponentFixture<TourneeaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourneeaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourneeaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
