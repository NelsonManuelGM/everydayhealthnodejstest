import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { TrackingDatum } from './entities/tracking-datum.entity';
import { TrackingDataService } from './tracking-data.service';

describe('TrackingDataService', () => {
  let service: TrackingDataService;
  // const data = {
  //   user_id:1,
  //   newsletter_id:103,
  //   action:'open',
  //   activity_date: new Date('2021-06-04 22:19:57')
  // }

  const mockTrackingData = {
    find: jest.fn((newsletter_id) => newsletter_id),
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

  it('should return an predefined object',()=>{
    const newsletter_id = 1
    const data = service.getNLSummary(newsletter_id)
    expect(data).toEqual(1)
  })
});
