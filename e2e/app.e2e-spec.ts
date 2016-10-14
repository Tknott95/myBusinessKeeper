import { MyBusinessKeeperPage } from './app.po';

describe('my-business-keeper App', function() {
  let page: MyBusinessKeeperPage;

  beforeEach(() => {
    page = new MyBusinessKeeperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
