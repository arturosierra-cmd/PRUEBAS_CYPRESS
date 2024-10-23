describe('Interacción del Usuario en Vista de Formularios', () => {

  // Visita la página de formularios antes de cada test
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5501/cypress/public/formulario.html'); // Ajusta la ruta según tu proyecto
  });

  it('Debería navegar entre las secciones del sidebar', () => {
    // Verificar que el botón de "Solicitudes" está activo por defecto
    cy.get('button').contains('Solicitudes').should('have.class', 'active');

    // Hacer clic en "Documentos" y verificar que ahora tiene la clase active
    cy.get('button').contains('Documentos').click().should('have.class', 'active');

    // Verificar que el botón de "Solicitudes" ya no tiene la clase active
    cy.get('button').contains('Solicitudes').should('not.have.class', 'active');

    // Hacer clic en "Estados" y verificar que ahora tiene la clase active
    cy.get('button').contains('Estados').click().should('have.class', 'active');

    // Hacer clic en "Papelera" y verificar que ahora tiene la clase active
    cy.get('button').contains('Papelera').click().should('have.class', 'active');
  });
});
