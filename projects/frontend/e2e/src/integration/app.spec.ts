import { getGreeting } from '../support/app.po';

describe('frontend', () => {
  beforeEach(() => cy.visit('/'));

  it('should render title', () => {
    getGreeting().contains('frontend app is running!');
  });

  it('should match snapshot', () => {
    (cy as any).matchImageSnapshot();
  });
});
