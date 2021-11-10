import { Test, TestingModule } from '@nestjs/testing';
import { ReportService } from "../report/report.service";
import { ReportDTO } from '../dto/report.dto';
import { UpdateReportDTO } from '../dto/update-report.dto';


class ApiServiceMock {
    create(dto: any) {
       return null;
    }
    findAll() {
      return [];
    }
    findByCoinId(id: number) {
      return [];
    }

    delete(coinId: number ) {
      return [];
    }

    update(coinId: number) {
      return [];
    }
  }

  describe.only("ReportService", () => {

    let reportService: ReportService;
  
    beforeAll(async () => {
      const ApiServiceProvider = {
        provide: ReportService,
        useClass: ApiServiceMock,
      }
      const module: TestingModule = await Test.createTestingModule({
        providers: [
          ReportService, ApiServiceProvider
        ],
      }).compile();
      reportService = module.get<ReportService>(ReportService);
    })
  
    it('should call create method with expected params', async () => {
      const createReportSpy = jest.spyOn(reportService, 'create');
      const dto = new ReportDTO();
      reportService.create(dto);
      expect(createReportSpy).toHaveBeenCalledWith(dto);
    });
  
    it('should call findByCoinId method with expected param', async () => {
      const findByCoinIdSpy = jest.spyOn(reportService, 'findByCoinId');
      const coinId = 1;
      reportService.findByCoinId(coinId);
      expect(findByCoinIdSpy).toHaveBeenCalledWith(coinId);
    });
  
    it('should call update method with expected params', async () => {
      const updateReportSpy = jest.spyOn(reportService, 'update');
      const coinId = 1;
      const dto = new UpdateReportDTO();
      reportService.update(coinId, dto);
      expect(updateReportSpy).toHaveBeenCalledWith(coinId, dto);
    });
  
    it('should call delete method with expected param', async () => {
      const deleteReportSpy = jest.spyOn(reportService, 'delete');
      const coinId = 1;
      reportService.delete(coinId);
      expect(deleteReportSpy).toHaveBeenCalledWith(coinId);
    });
  })