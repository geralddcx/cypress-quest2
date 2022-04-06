/// <reference types="cypress" />

beforeEach( () => {
    cy.visit('https://preprod.backmarket.fr/register')

    cy.get('[data-qa="accept-cta"').click();
})

describe('Un utilisateur veut créer un nouveau compte avec nom prénom mail et mot de passe corrects', () => {
    it('il remplit le champ nom prenom mail et mot de passe correctement', () => {
        cy.get('#firstName').type('jenson');
        cy.get('#lastName').type('wiatt');

        cy.get("#signup-email").type('jenson.wiatt@orperfect.com');
        cy.get("#signup-password").type('Azerty123456');

        cy.get('[data-qa="signup-submit-button"]').click();    

        cy.url().should('eq','https://preprod.backmarket.fr/dashboard/orders');
    })
});