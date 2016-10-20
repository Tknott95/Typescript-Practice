import { TspracticePage } from './app.po';

describe('tspractice App', function() {
  let page: TspracticePage;

  beforeEach(() => {
    page = new TspracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
