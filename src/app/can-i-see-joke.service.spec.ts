import { TestBed } from '@angular/core/testing';

import { CanISeeJokeService } from './can-i-see-joke.service';

describe('CanISeeJokeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanISeeJokeService = TestBed.get(CanISeeJokeService);
    expect(service).toBeTruthy();
  });
});
