describe('Validación de Pago de Mensualidad (con interacción lenta)', () => {

    it('Debería seleccionar los meses y calcular el total correctamente con interacción lenta', () => {
      // Visitar la página HTML de pago de mensualidad
      cy.visit('http://127.0.0.1:5501/cypress/public/Pago_Mensualidad.html'); // Cambia esta URL según tu entorno

      // Esperar un momento para visualizar la carga de la página
      cy.wait(1000);

      // Verificar que el nombre del estudiante está correcto
      cy.get('input[name="nombre"]').should('have.value', 'Juan Perez');

      // Esperar antes de seleccionar los meses
      cy.wait(1000);

      // Seleccionar los meses enero y febrero
      cy.get('input[name="ene"]').check({ force: true });
      cy.wait(500); // Esperar 500ms antes de seleccionar el segundo mes
      cy.get('input[name="feb"]').check({ force: true });

      // Esperar antes de hacer clic en el botón de calcular
      cy.wait(1000);

      // Hacer clic en el botón para calcular el total
      cy.get('button').contains('Calcular Total').click({ force: true });

      // Esperar antes de verificar el total
      cy.wait(1000);

      // Verificar que el total sea correcto (suponiendo que cada mes es 75 Q)
      cy.get('#totalPagar').should('contain', '150.00');
  
      // Esperar antes de hacer clic en el botón de pagar
      cy.wait(1000);

      // Hacer clic en el botón de pagar
      cy.get('button').contains('Pagar').click({ force: true });
  
      // Verificar que no haya errores (mensaje de error debe estar oculto)
      cy.get('#mensaje').should('not.be.visible');
    });

    it('Debería mostrar error si no se seleccionan meses para pagar con interacción lenta', () => {
      // Visitar la página HTML de pago de mensualidad
      cy.visit('http://127.0.0.1:5501/cypress/public/Pago_Mensualidad.html');

      // Esperar antes de intentar pagar sin seleccionar meses
      cy.wait(1000);

      // Hacer clic en el botón de pagar sin seleccionar ningún mes
      cy.get('button').contains('Pagar').click({ force: true });
  
      // Esperar antes de verificar el mensaje de error
      cy.wait(1000);

      // Verificar que aparezca un mensaje de error
      cy.get('#mensaje').should('contain.text', 'Por favor, seleccione al menos un mes para pagar').and('be.visible');
    });
});
