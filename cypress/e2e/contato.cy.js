/// <reference types="cypress"/>

describe('Funcionalidade: Contato', () => {

   beforeEach(() => {
        cy.visit('index.html')

    });
  
  
  
  it('Deve preencher formulário de contato com sucesso', () => {
    cy.get('[name="name"]').type('Vitor Damasceno')
    cy.get('[name="email"]').type('vitor@teste.gmail.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.contains('Contato enviado com sucesso!').should('exist')

  })

   it('Deve validar a mensagem de erro ao enviar sem preencher o nome', () => {
    cy.get('#name').clear()
    cy.get('#email').type('Vitor@teste.com')
    cy.get('#subject').select('Parcerias')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain','Por favor, preencha o campo Nome')

  });

  it('Deve validar a mensagem de erro ao enviar sem preencher o email', () => {
    cy.get('#name').type('Vitor Damasceno')
    cy.get('#email').clear()
    cy.get('#subject').select('Parcerias')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain','Por favor, preencha o campo E-mail')

  });

  it('Deve validar a mensagem de erro ao enviar sem selecionar o assunto', () => {
    cy.get('#name').type('Vitor Damasceno')
    cy.get('#email').type('Vitor@teste.com')
    
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain','selecione o Assunto')

  });

  it('Deve validar a mensagem de erro ao enviar sem digitar a mensagem', () => {
    cy.get('#name').type('Vitor Damasceno')
    cy.get('#email').type('Vitor@teste.com')
    cy.get('#subject').select('Parcerias')
    cy.get('#message').clear()
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain','Por favor, escreva sua Mensagem')

  });







})