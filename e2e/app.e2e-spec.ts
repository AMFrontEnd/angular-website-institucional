import { AngularWebInstitucionalPage } from './app.po';

describe('angular-web-institucional App', () => {
  let page: AngularWebInstitucionalPage;

  beforeEach(() => {
    page = new AngularWebInstitucionalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
