import { Test } from '@nestjs/testing';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';

describe('JobsController', () => {
  let jobsController: JobsController;
  let jobsService: JobsService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [JobsController],
      providers: [JobsService],
    }).compile();

    jobsService = module.get<JobsService>(JobsService);
    jobsController = module.get<JobsController>(JobsController);
  });

  describe('root', () => {
    it('should return list of jobs', async () => {
      const result = ['test'];
      jest.spyOn(jobsService, 'findAll').mockImplementation(() => result);
      const jobs = await this.jobsController.findAll();
      expect(jobs).toEqual(['test']);
    });
  });
});
