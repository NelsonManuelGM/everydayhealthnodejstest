import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { TrackingDataController } from '../src/tracking-data/controllers/tracking-data.controller';
import { TrackingDataService } from '../src/tracking-data/services/tracking-data.service';

describe('TrackingDataController', () => {
  let app: INestApplication;
  const data = id => ({
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
    getNLSummary: jest.fn((id) => data(id))
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
    const newsletter_id = 101

    return request(app.getHttpServer())
      .get(`/tracking-data/nlsummary/${newsletter_id}`)
      .expect(200)
      .expect(data(newsletter_id));
  });
});
