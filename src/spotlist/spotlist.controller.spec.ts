import { Test, TestingModule } from '@nestjs/testing';
import { SpotlistController } from './spotlist.controller';

describe('SpotlistController', () => {
  let controller: SpotlistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpotlistController],
    }).compile();

    controller = module.get<SpotlistController>(SpotlistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
