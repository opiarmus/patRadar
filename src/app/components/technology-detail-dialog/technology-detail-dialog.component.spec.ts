import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyDetailDialogComponent } from './technology-detail-dialog.component';

describe('TechnologyDetailDialogComponent', () => {
  let component: TechnologyDetailDialogComponent;
  let fixture: ComponentFixture<TechnologyDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnologyDetailDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnologyDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
