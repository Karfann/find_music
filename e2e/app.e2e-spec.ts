import { FindMusicPage } from './app.po';

describe('find-music App', () => {
  let page: FindMusicPage;

  beforeEach(() => {
    page = new FindMusicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
