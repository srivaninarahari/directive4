import { Directive4Page } from './app.po';

describe('directive4 App', () => {
  let page: Directive4Page;

  beforeEach(() => {
    page = new Directive4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
