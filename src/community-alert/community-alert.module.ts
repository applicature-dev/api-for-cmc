import { Module } from '@nestjs/common';
import { CommunityAlertService } from './community-alert.service';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'CommunityAlert', schema : CommunityAlertModule }]),
  ],
  exports: [
    MongooseModule.forFeature([{ name: 'CommunityAlert', schema : CommunityAlertModule }]),
  ],
  providers: [CommunityAlertService]
})
export class CommunityAlertModule {}
