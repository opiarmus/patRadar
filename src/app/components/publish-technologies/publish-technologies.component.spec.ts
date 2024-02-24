import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishTechnologiesComponent } from './publish-technologies.component';

describe('PublishTechnologiesComponent', () => {
  let component: PublishTechnologiesComponent;
  let fixture: ComponentFixture<PublishTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishTechnologiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublishTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
