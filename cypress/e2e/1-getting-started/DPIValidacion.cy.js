describe('Validación de DPI', () => {

    it('Debería validar correctamente un DPI con 13 dígitos', () => {
      // Visitar la página HTML que has creado
      cy.visit('http://127.0.0.1:5501/cypress/public/index.html');
      
      // Ingresar un DPI correcto (13 dígitos)
      cy.get('input[name="dpi"]').type('3462121821601', { force: true });
  
      // Hacer clic en el botón de validar
      cy.get('button[type="submit"]').click({ force: true });
  
      // Verificar que el mensaje sea "DPI CORRECTO"
      cy.get('#mensaje').should('have.text', 'DPI CORRECTO');
    });
  
    it('Debería mostrar error para un DPI con menos de 13 dígitos o con letras', () => {
      // Visitar la página HTML que has creado
      cy.visit('http://127.0.0.1:5501/cypress/public/index.html');
  
      // Ingresar un DPI incorrecto (menos de 13 dígitos)
      cy.get('input[name="dpi"]').type('12345', { force: true });
  
      // Hacer clic en el botón de validar
      cy.get('button[type="submit"]').click({ force: true });
  
      // Verificar que el mensaje sea "DPI INCORRECTO"
      cy.get('#mensaje').should('have.text', 'DPI INCORRECTO');
  
      // Limpiar el campo de entrada
      cy.get('input[name="dpi"]').clear();
  
      // Ingresar un DPI con letras
      cy.get('input[name="dpi"]').type('abcde12345678', { force: true });
  
      // Hacer clic en el botón de validar
      cy.get('button[type="submit"]').click({ force: true });
  
      // Verificar que el mensaje sea "DPI INCORRECTO"
      cy.get('#mensaje').should('have.text', 'DPI INCORRECTO');
    });
  });
  