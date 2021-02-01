/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductManagerService } from './product-manager.service';

describe('Service: ProductManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductManagerService]
    });
  });

  it('should ...', inject([ProductManagerService], (service: ProductManagerService) => {
    expect(service).toBeTruthy();
  }));
});
