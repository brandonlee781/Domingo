import { DomingoPage } from './app.po';

describe('domingo App', () => {
  let page: DomingoPage;

  beforeEach(() => {
    page = new DomingoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
