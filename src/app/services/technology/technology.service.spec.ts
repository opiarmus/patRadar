import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { TechnologyService } from './technology.service';
import { SnackbarService } from "../snackbar/snackbar.service";

describe('TechnologyService', () => {
  let service: TechnologyService;
  let httpTestingController: HttpTestingController;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TechnologyService,
        { provide: SnackbarService, useValue: jasmine.createSpyObj('snackbarService', ['add']) }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should get technologies', () => {
    const expectedTech: any[] = [{}];

    TestBed.get(TechnologyService).getTechnologies()
      .subscribe((tech: any) => expect(tech).toEqual(expectedTech, 'expected technologies'), fail);

    httpTestingController.expectOne('api/technologies').flush(expectedTech);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
