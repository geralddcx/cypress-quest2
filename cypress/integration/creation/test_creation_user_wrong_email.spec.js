/// <reference types="cypress" />

beforeEach( () => {
    cy.visit('https://preprod.backmarket.fr/register')

    cy.get('[data-qa="accept-cta"').click();
})

describe('Un utilisateur veut créer un nouveau compte avec nom prénom mail erroné et mot de passe valide', () => {
    it('nom prénom et mot de passe correct mais pas le mail', () => {
        cy.get('#firstName').type('jenson');
        cy.get('#lastName').type('wiatt');

        cy.get("#signup-email").type('jenson.wiatt.com');
        cy.get("#signup-password").type('Azerty123456');

        cy.get('[data-qa="signup-submit-button"]').click();    

        // cy.contains("Au moins 8 caractères, dont 1 majuscule, 1 minuscule et 1 chiffre. Parce qu'on sait jamais.").should('be.visible');
        cy.url().should('eq','https://preprod.backmarket.fr/register');

        cy.get('#signup-email')
        .should('have.css', 'border', '1px solid rgb(169, 15, 20)')
    })
});

