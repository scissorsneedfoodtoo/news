import commonExpectedJsonLd from '../../../fixtures/common-expected-json-ld.json';
const tagExpectedJsonLd = {
  '@type': 'Series',
  url: 'http://localhost:8080/espanol/news/tag/freecodecamp/',
  name: 'freeCodeCamp'
};
let jsonLdObj;

describe('Tag page structured data (JSON-LD – Ghost sourced)', () => {
  before(() => {
    // Update baseUrl to include current language
    Cypress.config('baseUrl', 'http://localhost:8080/espanol/news/');
  });

  beforeEach(() => {
    cy.visit('/tag/freecodecamp/');

    jsonLdObj = cy
      .get('head script[type="application/ld+json"]')
      .then($script => {
        jsonLdObj = JSON.parse($script.text());
      });
  });

  it('matches the expected base values', () => {
    expect(jsonLdObj['@context']).to.equal(commonExpectedJsonLd['@context']);
    expect(jsonLdObj['@type']).to.equal(tagExpectedJsonLd['@type']);
    expect(jsonLdObj.url).to.equal(tagExpectedJsonLd.url);
    expect(jsonLdObj.name).to.equal(tagExpectedJsonLd.name);
  });

  it('matches the expected publisher values', () => {
    expect(jsonLdObj.publisher).to.deep.equal(
      commonExpectedJsonLd.espanol.publisher
    );
  });

  it('matches the expected mainEntityOfPage values', () => {
    expect(jsonLdObj.mainEntityOfPage).to.deep.equal(
      commonExpectedJsonLd.espanol.mainEntityOfPage
    );
  });
});
