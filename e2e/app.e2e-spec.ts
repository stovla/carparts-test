import { CarpartsTestPage } from './app.po';

describe('carparts-test App', () => {
  let page: CarpartsTestPage;

  beforeEach(() => {
    page = new CarpartsTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
