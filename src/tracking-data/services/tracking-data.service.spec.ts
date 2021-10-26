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

  it('should return the new letter summary due a newsletter_id', async () => {
    const newsletter_id = 1
    const expectedData = s => ({
      "newsletter_id": newsletter_id,
      "summary": s
    })
    const _data = await service.getNLSummary(newsletter_id)
    expect(_data).toEqual(expectedData(aggregateData))
  })

  it('should return the user summary due a user_id', async () => {
    const user_id = 6;
    const expectedData = s => ({
      "user_id": user_id,
      "summary": s
    })

    const response = await service.getUserSummary(user_id)
    expect(response).toEqual(expectedData(aggregateData))
  })


  it('should return the new letter action summary', async () => {
    const newsletter_id = 1;
    const expectedData = s => ({
      "newsletter_id": newsletter_id,
      "action": 'open',
      "summary": s
    })

    const response = await service.getNLActionSummary(newsletter_id)
    expect(response).toEqual(expectedData(aggregateData))
  })
});
