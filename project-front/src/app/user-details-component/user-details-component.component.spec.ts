import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponentComponent } from './user-details-component.component';

describe('UserDetailsComponentComponent', () => {
  let component: UserDetailsComponentComponent;
  let fixture: ComponentFixture<UserDetailsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponentComponent]
    });
    fixture = TestBed.createComponent(UserDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
