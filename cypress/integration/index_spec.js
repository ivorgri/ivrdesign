describe('Homepage', function() {
  it('succesfully loads', function() {
    cy.visit('/')
  })
  it('should have a title', function() {
    cy.get('#title').should('exist');
  })
  it('should have a title containing IVR and DESIGN', function() {
    cy.get('#title').should('contain','IVR');
    cy.get('#title').should('contain','DESIGN');
  })
})