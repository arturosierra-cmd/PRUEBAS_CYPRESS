describe('Pruebas de Login', () => {

  // Visita la página de login antes de cada test
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5501/cypress/public/login.html'); // Ajusta esta ruta según tu proyecto
  });

  it('Debería mostrar correctamente los campos de usuario, contraseña y el botón de login', () => {
    // Verificar si el campo de usuario está visible
    cy.get('input#user').should('be.visible');

    // Verificar si el campo de contraseña está visible
    cy.get('input#password').should('be.visible');

    // Verificar si el botón de login está visible
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('Debería permitir al usuario ingresar credenciales válidas y hacer login correctamente', () => {
    // Ingresar un nombre de usuario válido
    cy.get('input#user').clear().type('ARTURO UMG');

    // Ingresar una contraseña válida
    cy.get('input#password').clear().type('password123');

    // Hacer clic en el botón de login
    cy.get('button[type="submit"]').click();

    // Verificar la redirección a la página principal (ajusta la URL según tu sistema)
    cy.url().should('include', '/home');
  });

  it('Debería mostrar un mensaje de error si los campos están vacíos al hacer clic en login', () => {
    // Dejar los campos vacíos y hacer clic en el botón de login
    cy.get('button[type="submit"]').click();

    // Verificar que se muestre el mensaje de error adecuado (ajusta el selector según tu HTML)
    cy.get('.error-message').should('be.visible').and('contain', 'Por favor ingrese su usuario y contraseña');
  });

  it('Debería mostrar un mensaje de error si el usuario ingresa credenciales incorrectas', () => {
    // Ingresar un nombre de usuario incorrecto
    cy.get('input#user').clear().type('usuario_incorrecto_UMG');

    // Ingresar una contraseña incorrecta
    cy.get('input#password').clear().type('password_incorrecto');

    // Hacer clic en el botón de login
    cy.get('button[type="submit"]').click();

    // Verificar que se muestre el mensaje de error de credenciales incorrectas
    cy.get('.error-message').should('be.visible').and('contain', 'Credenciales incorrectas');
  });
});
