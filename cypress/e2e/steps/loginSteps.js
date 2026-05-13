/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('que eu estou na página de login', () => {
    cy.log('Acessando a página de login');
    cy.visit('https://www.saucedemo.com/');
});

When('eu digito o usuário padrão e a senha correta', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
});

And('clico no botão Login', () => {
    cy.get('[data-test="login-button"]').click();
});

Then('eu devo ser redirecionado para a página de Produtos', () => {
    cy.get('[data-test="title"]').should('have.text', 'Products');
});