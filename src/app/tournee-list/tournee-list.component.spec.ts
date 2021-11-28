import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourneeListComponent } from './tournee-list.component';

describe('TourneeListComponent', () => {
  let component: TourneeListComponent;
  let fixture: ComponentFixture<TourneeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourneeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourneeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
