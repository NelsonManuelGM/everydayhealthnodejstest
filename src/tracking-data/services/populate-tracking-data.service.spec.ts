import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { TrackingDatum } from '../entities/tracking-datum.entity';
import { PopulateTrackingDataService } from './populate-tracking-data.service';

describe('PopulateTrackingDataService', () => {
  let service: PopulateTrackingDataService;
  
  const mockTrackingDatum = {
    
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PopulateTrackingDataService,
        {
          provide: getModelToken(TrackingDatum.name),
          useValue: mockTrackingDatum
        }
      ],
    }).compile();

    service = module.get<PopulateTrackingDataService>(PopulateTrackingDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
