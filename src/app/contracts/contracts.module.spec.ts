import { ContractsModule } from './contracts.module';

describe('ContratsModule', () => {
  let contratsModule: ContractsModule;

  beforeEach(() => {
    contratsModule = new ContractsModule();
  });

  it('should create an instance', () => {
    expect(contratsModule).toBeTruthy();
  });
});
