import commonExpectedMeta from '../../../fixtures/common-expected-meta.json';
const authorExpectedMeta = {
  title: 'Rafael D. Hernandez - freeCodeCamp.org',
  url: 'http://localhost:8080/espanol/news/author/rafael/',
  image: {
    url: 'http://localhost:3030/content/images/2024/09/fccbg_25e868b401.png', // Custom banner image -- hidden on author page
    width: 1500,
    height: 500
  },
  description:
    'Web Developer | Global Language Translations Lead at @freeCodeCamp'
};

describe('Author page metadata (Ghost sourced)', () => {
  before(() => {
    // Update baseUrl to include current language
    Cypress.config('baseUrl', 'http://localhost:8080/espanol/news/');
  });

  context("Rafael's author page", () => {
    beforeEach(() => {
      cy.visit('/author/rafael/');
    });

    it('<title>', () => {
      cy.title().should('eq', authorExpectedMeta.title);
    });

    it('<link> canonical', () => {
      cy.get('head link[rel="canonical"]').should(
        'have.attr',
        'href',
        authorExpectedMeta.url
      );
    });

    it('<meta> description', () => {
      cy.get('head meta[name="description"]').should(
        'have.attr',
        'content',
        authorExpectedMeta.description
      );
    });

    it('<meta> generator', () => {
      cy.get('head meta[name="generator"]').should(
        'have.attr',
        'content',
        commonExpectedMeta.generator
      );
    });

    it('<meta> og:site_name', () => {
      cy.get('head meta[property="og:site_name"]').should(
        'have.attr',
        'content',
        commonExpectedMeta.siteName
      );
    });

    it('<meta> og:type', () => {
      cy.get('head meta[property="og:type"]').should(
        'have.attr',
        'content',
        'profile'
      );
    });

    it('<meta> og:title', () => {
      cy.get('head meta[property="og:title"]').should(
        'have.attr',
        'content',
        authorExpectedMeta.title
      );
    });

    it('<meta> og:description', () => {
      cy.get('head meta[property="og:description"]').should(
        'have.attr',
        'content',
        authorExpectedMeta.description
      );
    });

    it('<meta> og:url', () => {
      cy.get('head meta[property="og:url"]').should(
        'have.attr',
        'content',
        authorExpectedMeta.url
      );
    });

    // Has a custom banner image
    it('<meta> og:image', () => {
      cy.get('head meta[property="og:image"]').should(
        'have.attr',
        'content',
        authorExpectedMeta.image.url
      );
    });

    it('<meta> og:image:width', () => {
      cy.get('head meta[property="og:image:width"]').should(
        'have.attr',
        'content',
        authorExpectedMeta.image.width
      );
    });

    it('<meta> og:image:height', () => {
      cy.get('head meta[property="og:image:height"]').should(
        'have.attr',
        'content',
        authorExpectedMeta.image.height
      );
    });

    it('<meta> article:publisher', () => {
      cy.get('head meta[property="article:publisher"]').should(
        'have.attr',
        'content',
        commonExpectedMeta.facebook.url
      );
    });

    it('<meta> twitter:card', () => {
      cy.get('head meta[name="twitter:card"]').should(
        'have.attr',
        'content',
        commonExpectedMeta.twitter.cardType
      );
    });

    it('<meta> twitter:title', () => {
      cy.get('head meta[name="twitter:title"]').should(
        'have.attr',
        'content',
        authorExpectedMeta.title
      );
    });

    it('<meta> twitter:description', () => {
      cy.get('head meta[name="twitter:description"]').should(
        'have.attr',
        'content',
        authorExpectedMeta.description
      );
    });

    it('<meta> twitter:url', () => {
      cy.get('head meta[name="twitter:url"]').should(
        'have.attr',
        'content',
        authorExpectedMeta.url
      );
    });

    it('<meta> twitter:image', () => {
      cy.get('head meta[name="twitter:image"]').should(
        'have.attr',
        'content',
        authorExpectedMeta.image.url
      );
    });

    it('<meta> twitter:site', () => {
      cy.get('head meta[name="twitter:site"]').should(
        'have.attr',
        'content',
        commonExpectedMeta.espanol.twitterHandle
      );
    });

    // Only for authors with a Twitter account
    it('<meta> twitter:creator', () => {
      cy.get('head meta[name="twitter:creator"]').should(
        'have.attr',
        'content',
        '@RafaelDavisH'
      );
    });
  });
});
