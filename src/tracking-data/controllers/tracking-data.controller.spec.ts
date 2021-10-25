import { Test, TestingModule } from '@nestjs/testing';
import { TrackingDataController } from './tracking-data.controller';
import { TrackingDataService } from './tracking-data.service';

describe('TrackingDataController', () => {
  let controller: TrackingDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrackingDataController],
      providers: [TrackingDataService],
    }).compile();

    controller = module.get<TrackingDataController>(TrackingDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
