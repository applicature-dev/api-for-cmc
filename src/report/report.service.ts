import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateReportDTO } from 'src/dto/update-report.dto';
import { ReportDTO } from '../dto/report.dto';
import { Report } from '../schemas/report.schema';

@Injectable()
export class ReportService {
    constructor(
        @InjectModel(Report.name) private readonly reportModel : Model<Report>
    ){}

    async findAll() : Promise<Report[]>{
        return await this.reportModel
            .find({},{'_id': 0})
            .exec();
    }

    async findByCoinId(coinId : number) : Promise<Report> {
        return await this.reportModel
            .findOne({'coinId': coinId}, {'_id': 0})
            .exec();
    }

    async create(report: ReportDTO) : Promise<Report> {
            const createdReport = new this.reportModel(report);
            return await createdReport.save();
    }

    delete(coinId: number) : any {
        this.reportModel.findOneAndDelete({coinId}, function(err, doc){
            if(err){
                console.log(err.message)
            }else {
                return doc;
            }
        });
    }

    async update(coinId: number, dto: UpdateReportDTO) {
        return await this.reportModel.findOneAndUpdate({coinId}, dto, {new:true});
    }
}
