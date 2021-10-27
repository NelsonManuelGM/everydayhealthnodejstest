import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';
import { PopulateTrackingDataService } from '../services/populate-tracking-data.service';

@Injectable()
export class TrackingDataCommand {
  constructor(
    private readonly populateService: PopulateTrackingDataService,
  ) { }
  @Command({
    command: 'populate',
    describe: 'populate db loading .csv file',
  })
  async create() {
    console.log("CORRIENDO COMMANDO")
    this.populateService.populate();
  }
}
