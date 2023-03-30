import {TestBed} from '@angular/core/testing';

import {DockerIOService} from './docker-io.service';

describe('DockerIOService', () => {
  let service: DockerIOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DockerIOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
