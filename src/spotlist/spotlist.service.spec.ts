import { Test, TestingModule } from '@nestjs/testing';
import { SpotlistService } from './spotlist.service';

describe('SpotlistService', () => {
  let service: SpotlistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpotlistService],
    }).compile();

    service = module.get<SpotlistService>(SpotlistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
