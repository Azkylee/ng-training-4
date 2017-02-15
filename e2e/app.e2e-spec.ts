import { NgTraining4Page } from './app.po';

describe('ng-training4 App', function() {
  let page: NgTraining4Page;

  beforeEach(() => {
    page = new NgTraining4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
