import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeMenuComponent } from './recipe-menu.component';

describe('RecipeMenuComponent', () => {
  let component: RecipeMenuComponent;
  let fixture: ComponentFixture<RecipeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
