import { TestBed } from '@angular/core/testing';

import { BinanceConnectService } from './binance-connect.service';

describe('BinanceConnectService', () => {
  let service: BinanceConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BinanceConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
