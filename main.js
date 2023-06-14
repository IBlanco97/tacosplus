// Agregar elementos a la sección de ofertas
var offersList = document.querySelector('#offers ul');

var offer1 = document.createElement('li');
offer1.textContent = '3 tacos de pollo + bebida por $7';
offersList.appendChild(offer1);

var offer2 = document.createElement('li');
offer2.textContent = '3 tacos de carne asada + bebida por $8';
offersList.appendChild(offer2);

var offer3 = document.createElement('li');
offer3.textContent = '3 tacos de pescado + bebida por $9';
offersList.appendChild(offer3);

// Validar el formulario de contacto
var form = document.querySelector('form');
var nameInput = document.querySelector('#name');
var emailInput = document.querySelector('#email');
var messageInput = document.querySelector('#message');

form.addEventListener('submit', function(event) {
  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    event.preventDefault();
    alert('Por favor, completa todos los campos.');
  }
});
