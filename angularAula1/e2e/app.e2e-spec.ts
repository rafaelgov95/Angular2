import { AngularAula1Page } from './app.po';

describe('angular-aula1 App', () => {
  let page: AngularAula1Page;

  beforeEach(() => {
    page = new AngularAula1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
