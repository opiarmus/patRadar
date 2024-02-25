import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyEditListComponent } from './technology-edit-list.component';

describe('TechnologyEditListComponent', () => {
  let component: TechnologyEditListComponent;
  let fixture: ComponentFixture<TechnologyEditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnologyEditListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnologyEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
