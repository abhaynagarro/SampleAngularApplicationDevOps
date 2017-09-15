import { SampleAngularApplicationDevOpsPage } from './app.po';

describe('sample-angular-application-dev-ops App', () => {
  let page: SampleAngularApplicationDevOpsPage;

  beforeEach(() => {
    page = new SampleAngularApplicationDevOpsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
