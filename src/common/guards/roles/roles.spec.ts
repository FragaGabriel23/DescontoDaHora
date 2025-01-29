import { Test, TestingModule } from '@nestjs/testing';
import { RolesGuard } from './roles.guard';

describe('Roles', () => {
  let provider: RolesGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolesGuard],
    }).compile();

    provider = module.get<RolesGuard>(RolesGuard);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
