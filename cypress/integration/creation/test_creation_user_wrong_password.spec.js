/// <reference types="cypress" />

beforeEach( () => {
    cy.visit('https://preprod.backmarket.fr/register')

    cy.get('[data-qa="accept-cta"').click();
});

describe('Un utilisateur veut créer un nouveau compte avec nom prénom mail et mot de passe trop court', () => {
    it('il remplit le champ nom prenom mail correctement mais pas la forme du mot de passe', () => {
        cy.get('#firstName').type('jenson');
        cy.get('#lastName').type('wiatt');

        cy.get("#signup-email").type('jenson.wiatt@orperfect.com');
        cy.get("#signup-password").type('123456');

        cy.get('[data-qa="signup-submit-button"]').click();    

        cy.contains("Au moins 8 caractères, dont 1 majuscule, 1 minuscule et 1 chiffre. Parce qu'on sait jamais.").should('be.visible');
        cy.url().should('eq','https://preprod.backmarket.fr/register');
    })
});