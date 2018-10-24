describe('Homepage', function() {
  it('succesfully loads', function() {
    cy.visit('/')
  })
  it('should have a header,containing a title with IVR and DESIGN in it', function() {
    cy.get('[data-cy=header]').should('exist');
    cy.get('[data-cy=site-title]').should('exist');
    cy.get('[data-cy=site-title]').should('contain','IVR');
    cy.get('[data-cy=site-title]').should('contain','DESIGN');
  })
  it('should have a footer containing mail, Github, LinkedIn links and icons', function() {
    cy.get('[data-cy=footer]').should('exist');
    cy.get('[data-cy=mailto-link]').should('exist');
    cy.get('[data-cy=mailto-icon]').should('exist');
    cy.get('[data-cy=github-link]').should('exist');
    cy.get('[data-cy=github-icon]').should('exist');
    cy.get('[data-cy=linkedin-link]').should('exist');
    cy.get('[data-cy=linkedin-icon]').should('exist');
  })
  it('should have a container with content', function() {
    cy.get('[data-cy=container]').should('exist');
    cy.get('[data-cy=content]').should('not.be.empty');
  })
})