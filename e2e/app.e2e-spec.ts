import { MeowPage } from './app.po';

describe('meow App', () => {
  let page: MeowPage;

  beforeEach(() => {
    page = new MeowPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
