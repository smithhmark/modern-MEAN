import { SocialAppPage } from './app.po';

describe('social-app App', function() {
  let page: SocialAppPage;

  beforeEach(() => {
    page = new SocialAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
