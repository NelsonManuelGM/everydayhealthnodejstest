import { Test, TestingModule } from '@nestjs/testing';
import { TrackingDataService } from '../services/tracking-data.service';
import { TrackingDataController } from './tracking-data.controller';


describe('TrackingDataController', () => {
  let controller: TrackingDataController;
  const data = id =>({
    "newsletter_id": id,
    "summary": [
      {
        "_id": "2021-06-01",
        "count": 3
      },
      {
        "_id": "2021-06-02",
        "count": 6
      }]
  })
  const mockTrackingDataService = {
    getNLSummary: jest.fn((id)=>data(id))
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrackingDataController],
      providers: [{
        provide: TrackingDataService,
        useValue: mockTrackingDataService
      }],
    }).compile();

    controller = module.get<TrackingDataController>(TrackingDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return getNLSummary data', async () => {
    const newsletter_id = 101
    const response = await controller.getNLSummary(newsletter_id)

    expect(response).toEqual(data(newsletter_id));
  });
});
