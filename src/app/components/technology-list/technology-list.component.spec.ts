import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyListComponent } from './technology-list.component';
// import {TechnologyService} from "../../services/technology/technology.service";
// import {of} from "rxjs";

describe('TechnologyListComponent', () => {
  let component: TechnologyListComponent;
  let fixture: ComponentFixture<TechnologyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnologyListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // from Donnerstag Vormittag
  // if('should get technologies', () => {
  //   const technologyService = TestBed.inject(TechnologyService) as jasmine.SpyObj<TechnologyService>
  //   technologyService.getTechnologies.and.returnValue(of([]));
  //
  //   expect(component.getTechnologiesOfCategory()).toEqual(of([]));
  // });

});

/* from https://gist.github.com/anschuermann/b9684e6b15c656d587c006b7cb07dea0
import { HeroesComponent } from './heroes.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HeroService } from '../hero.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let fixture: ComponentFixture<HeroesComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [HeroesComponent],
            providers: [{
                provide: HeroService, useValue: jasmine.createSpyObj('heroService', ['getHeroes']) }]
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(HeroesComponent);
        component = fixture.componentInstance;
    });

    it('should get heroes', () => {
        TestBed.get(HeroService).getHeroes.and.returnValue(of([]));
        fixture.detectChanges();

        expect(TestBed.get(HeroService).getHeroes.calls.count()).toBe(1, 'one call');
    });
});

 */
