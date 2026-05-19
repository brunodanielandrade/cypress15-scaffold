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

When('eu digito o usuário inválido e a senha inválida', () => {
    cy.get('[data-test="username"]').type('invalid_user');
    cy.get('[data-test="password"]').type('invalid_password');
});

When('eu digito uma senha{string}', (password) => {
    cy.get('[data-test="password"]').type(password);
});

And('clico no botão Login', () => {
    cy.get('[data-test="login-button"]').click();
});

Then('eu devo ver uma mensagem de erro {string}', (errorMessage) => {
    cy.get('[data-test="error"]').should('be.visible').and('contain', errorMessage);
});
