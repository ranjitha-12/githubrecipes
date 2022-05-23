import { TestBed } from '@angular/core/testing';

import { RecipeControllerService } from './recipe-controller.service';

describe('RecipeControllerService', () => {
  let service: RecipeControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
