/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        // acesso ao login
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {

            cy.login(dados.usuario, dados.senha)
        })
        cy.get('#primary-menu > .menu-item-629 > a').click()
    });

    

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //TODO 
        
        //compra 1 
        cy.addProdutos('Aero Daily Fitness Tee', 'XL', 'Black', 1)
        

        //compra 2
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(3) > a').click()
        cy.addProdutos('Aether Gym Pant', '34', 'Green', 1)
        
        //compra 3 
        
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'XL', 'Red', 1)
       
        //compra 4 
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(4) > a').click()
        cy.addProdutos('Autumn Pullie', 'XL', 'Red', 1)
         
        //checkout do produto 
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('#terms').click()
        //cy.get('#place_order').contains('Finalizar compra').click()
       
       
        cy.get('.woocommerce-billing-fields > h3').should('contain', 'Detalhes de faturamento')
       
    });


   

   

   
})