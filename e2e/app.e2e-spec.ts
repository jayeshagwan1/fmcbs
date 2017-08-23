import { Bsng4Page } from './app.po';

describe('bsng4 App', () => {
  let page: Bsng4Page;

  beforeEach(() => {
    page = new Bsng4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
