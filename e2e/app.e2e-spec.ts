import {HouseMaterialPage} from "./app.po";

describe('house-material App', function() {
  let page: HouseMaterialPage;

  beforeEach(() => {
    page = new HouseMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
