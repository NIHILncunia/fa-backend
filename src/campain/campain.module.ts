import { Module } from '@nestjs/common';
import { CampainController } from './campain.controller';
import { CampainService } from './campain.service';

@Module({
  controllers: [ CampainController, ],
  providers: [ CampainService, ],
})
export class CampainModule {}
