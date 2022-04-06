/// <reference types="cypress" />

beforeEach( () => {
    cy.visit('https://preprod.backmarket.fr/register')

    cy.get('[data-qa="accept-cta"]').click();
})

describe('Un utilisateur veut se connecter avec son mail et son mot de passe', () => {
    it('il remplit le champ mail et mot de passe correctement', () => {
        cy.get("#signin-email").type('grainsurlaplage@gmail.com');
        cy.get("#signin-password").type('Plopplop0');

        cy.get('[data-qa="signin-submit-button"]').click();    
        cy.url().should('contain','/dashboard/orders');
    })
});

describe('Un utilisateur veut se connecter avec un mot de passe incorrect', () => {
    it('il remplit le champ mail correctement', () => {
        cy.get("#signin-email").type('grainsurlaplage@gmail.com');
        cy.get("#signin-email").should('include.value','grainsurlaplage@gmail.com');

        cy.get("#signin-password").type('mauvaisMotDePasse');
        cy.get("#signin-password").should('include.value', 'mauvaisMotDePasse');

        cy.get('[data-qa="signin-submit-button"]').click();
        
        cy.contains("Informations d'identification erronées").should('be.visible');
        cy.url().should('eq','https://preprod.backmarket.fr/register');
    })
})