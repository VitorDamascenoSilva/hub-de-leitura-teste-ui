/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')

    });

    it('Deve fazer cadastro com sucesso, usando função JS', () =>{
        let email = `vitor${Date.now()}@teste.com`
        cy.get('#name').type('Vitor Damasceno')
        cy.get('#email').type(email)
        cy.get('#phone').type('11988768787')
        cy.get('#password').type('ChristisKing')
        cy.get('#confirm-password').type('ChristisKing')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
    })

    it('Deve fazer cadastro com sucesso, usando Faker', () =>{
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('11988768787')
        cy.get('#password').type('ChristisKing')
        cy.get('#confirm-password').type('ChristisKing')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)
    })

    it('Deve preencher cadastro com sucesso - Usando comando customizado', () => {
        let email = `vitor${Date.now()}@teste.com`
        let nome = faker.person.fullName ({sex: 'male'})
        cy.preencherCadastro(
            nome,
            email,
            '11878236673',
            'teste@gmail.com',
            'teste@gmail.com'
        )
        cy.url().should('include', 'dashboard')
        
    });


   
});