import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { TrackingDatum } from '../entities/tracking-datum.entity';
import { TrackingDataService } from './tracking-data.service';

describe('TrackingDataService', () => {
  let service: TrackingDataService;
  const aggregateData =
    [
      {
        "_id": "2021-06-01",
        "count": 3
      }
    ]

  const mockTrackingData = {
    aggregate: jest.fn(() => aggregateData),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TrackingDataService,
        {
          provide: getModelToken(TrackingDatum.name),
          useValue: mockTrackingData
        }
      ],
    }).compile();

    service = module.get<TrackingDataService>(TrackingDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the summary due a newsletter_id', async () => {
    const newsletter_id = 1
    const expectedData = s => ({
      "newsletter_id": newsletter_id,
      "summary": s
    })
    const _data = await service.getNLSummary(newsletter_id)
    expect(_data).toEqual(expectedData(aggregateData))
  })
});
