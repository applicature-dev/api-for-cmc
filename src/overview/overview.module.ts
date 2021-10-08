import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { OverviewSchema } from 'src/schemas/overview.schema';
import { OverviewService } from './overview.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Overview', schema : OverviewSchema }]),
  ],
  exports: [
    MongooseModule.forFeature([{ name: 'Overview', schema : OverviewSchema }]),
  ],
  providers: [OverviewService],
})
export class OverviewModule {}
