import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReportDTO } from 'src/dto/report.dto';
import { Report } from 'src/schemas/report.schema';


@Injectable()
export class ReportService {
    constructor(
        @InjectModel(Report.name) private readonly reportModel : Model<Report>
    ){}

    async findAll() : Promise<Report[]>{
        return await this.reportModel
            .find()
            .exec();
    }

    async findByCoinId(coinId : number) : Promise<Report> {
        return await this.reportModel
            .findOne({'coinId': coinId})
            .exec();
    }

    async create(report: ReportDTO) : Promise<Report> {
            const createdReport = new this.reportModel(report);
            return await createdReport.save();
    }
}
