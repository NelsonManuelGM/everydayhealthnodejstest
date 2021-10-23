import { Test, TestingModule } from '@nestjs/testing';
import { TrackingDataService } from './tracking-data.service';

describe('TrackingDataService', () => {
  let service: TrackingDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrackingDataService],
    }).compile();

    service = module.get<TrackingDataService>(TrackingDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
