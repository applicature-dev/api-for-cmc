import { Test, TestingModule } from "@nestjs/testing";
import { ReportDTO } from "../../dto/report.dto";
import { Report } from "../../schemas/report.schema";
import { ReportController } from "../report.controller";
import { ReportService } from "../report.service";
import { reportStub } from "./stubs/report.stubs";
import { UpdateReportDTO } from "../../dto/update-report.dto";

describe("Report controller", () => {

    const MockReportService = {
        provide: ReportService,
        useFactory: () => ({
          create: jest.fn(() => []),
          findAll: jest.fn(() => []),
          findByCoinId: jest.fn(() => { }),
          update: jest.fn(() => { }),
          delete: jest.fn(() => { }),
        })
      }

    let reportController: ReportController;
    let reportService: ReportService;

    beforeEach(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            imports: [],
            controllers: [ReportController],
            providers: [ReportService, MockReportService]
        })
        .compile();

        reportController = moduleRef.get<ReportController>(ReportController);
        reportService = moduleRef.get<ReportService>(ReportService);
        jest.clearAllMocks();
    });

    describe("", () => {
        describe("", () => {
            let report: Report;
            beforeEach(async () => {
                report = await reportController.findByCoinId(reportStub().coinId);
            });

            it("Report service should be defined", async () => {
                expect(reportService).toBeDefined();
            });

            it("calling find by coinId method", async () => {
                await reportController.findByCoinId(reportStub().coinId);
                expect(reportService.findByCoinId).toHaveBeenCalled();
            });

            it("calling find all method", async () => {
                await reportController.findAll();
                expect(reportService.findAll).toHaveBeenCalled();
            });

            it("creates new report with DTO ", () => {
                const report = new ReportDTO();
                expect(reportController.create(report)).not.toEqual(null);
            });

            it("Creates a new report with DTO", async () => {
                const report = new ReportDTO();
                reportController.create(report)
                expect(reportService.create).toHaveBeenCalled();
                expect(reportService.create).toHaveBeenCalledWith(report);
            });

            it("Updates a report with DTO", async () => {
                const report = new UpdateReportDTO();
                const coinId = 1;
                reportController.update(coinId, report)
                expect(reportService.update).toHaveBeenCalled();
                expect(reportService.update).toHaveBeenCalledWith(coinId,report);
            });

            it("Deletes a report", async () => {
                const coinId = 1;
                reportController.delete(coinId);
                expect(reportService.delete).toHaveBeenCalled();
                expect(reportService.delete).toHaveBeenCalledWith(coinId);
            });
        });
    });
});