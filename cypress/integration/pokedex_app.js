describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('/')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('check ivysaur page', function() {
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})
