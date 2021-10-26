import { Test, TestingModule } from '@nestjs/testing';
import { TrackingDataService } from '../services/tracking-data.service';
import { TrackingDataController } from './tracking-data.controller';


describe('TrackingDataController', () => {
  let controller: TrackingDataController;
  const summary = [
    {
      "_id": "2021-06-01",
      "count": 3
    },
    {
      "_id": "2021-06-02",
      "count": 6
    }]

  const nLSummaryData = id => ({
    "newsletter_id": id,
    "summary": summary
  })
  const userSummaryData = id => ({
    "user_id": id,
    "summary": summary
  })

  const nlActionSummaryData = id => ({
    "newsletter_id": id,
    "action": "open",
    "summary": summary
  })
  const mockTrackingDataService = {
    getNLSummary: jest.fn((id) => nLSummaryData(id)),
    getUserSummary: jest.fn((id) => userSummaryData(id)),
    getNLActionSummary: jest.fn((id) => nlActionSummaryData(id)),
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

  it('should return Newsletter Summary data', async () => {
    const newsletter_id = 101
    const response = await controller.getNLSummary(newsletter_id)

    expect(response).toEqual(nLSummaryData(newsletter_id));
  });

  it('should return User Summary data', async () => {
    const user_id = 5
    const response = await controller.getUserSummary(user_id)

    expect(response).toEqual(userSummaryData(user_id));
  });

  it('should return New Letters Summary data', async () => {
    const newsletter_id = 5
    const response = await controller.getNLActionSummary(newsletter_id)

    expect(response).toEqual(nlActionSummaryData(newsletter_id));
  });
});
