import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { TrackingDataController } from '../src/tracking-data/controllers/tracking-data.controller';
import { TrackingDataService } from '../src/tracking-data/services/tracking-data.service';

describe('TrackingDataController', () => {
  let app: INestApplication;
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

    app = module.createNestApplication();
    await app.init();
  });


  it('GET nlsummary/:id', async () => {
    const newsletter_id = 101;

    return request(app.getHttpServer())
      .get(`/tracking-data/nlsummary/${newsletter_id}`)
      .expect(200)
      .expect(nLSummaryData(newsletter_id));
  });

  it('GET usersummary/:id', async () => {
    const user_id = 6;

    return request(app.getHttpServer())
      .get(`/tracking-data/usersummary/${user_id}`)
      .expect(200)
      .expect(userSummaryData(user_id));
  });

  it('GET nlactionsummary/:id', async () => {
    const newsletter_id = 101;

    return request(app.getHttpServer())
      .get(`/tracking-data/nlactionsummary/${newsletter_id}`)
      .expect(200)
      .expect(nlActionSummaryData(newsletter_id));
  });
});
