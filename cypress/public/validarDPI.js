document.getElementById('dpiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener el valor del DPI ingresado
    var dpi = document.getElementById('dpi').value;
    var mensaje = document.getElementById('mensaje');
    
    // Verificar si el DPI tiene 13 dígitos y es numérico
    if (dpi.length === 13 && !isNaN(dpi)) {
      mensaje.textContent = 'DPI CORRECTO';
      mensaje.style.color = 'green';
    } else {
      mensaje.textContent = 'DPI INCORRECTO';
      mensaje.style.color = 'red';
    }
  });
  