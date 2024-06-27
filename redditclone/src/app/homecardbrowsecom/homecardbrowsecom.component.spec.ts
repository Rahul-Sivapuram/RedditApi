import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecardbrowsecomComponent } from './homecardbrowsecom.component';

describe('HomecardbrowsecomComponent', () => {
  let component: HomecardbrowsecomComponent;
  let fixture: ComponentFixture<HomecardbrowsecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomecardbrowsecomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomecardbrowsecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
