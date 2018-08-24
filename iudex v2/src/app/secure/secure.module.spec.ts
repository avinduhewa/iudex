import { SecureModule } from './secure.module';

describe('SecureModule', () => {
  let secureModule: SecureModule;

  beforeEach(() => {
    secureModule = new SecureModule();
  });

  it('should create an instance', () => {
    expect(secureModule).toBeTruthy();
  });
});
