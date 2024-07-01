import Swal from 'sweetalert2';

export const usuarios = [
  { usuario: "Ameth", pass: "Ameth2005" }
];

export const iniciarSesion = (usuario, contraseña) => {
  const usuarioEncontrado = usuarios.find(
    u => u.usuario === usuario && u.pass === contraseña
  );

  if (usuarioEncontrado) {
    return true; 
  } else {
    return false; 
  }
};

export const handleIniciarSesion = () => {
  let usuario = document.getElementById("RUser").value.trim();
  let contraseña = document.getElementById("RPass").value.trim();

  if (iniciarSesion(usuario, contraseña)) {
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: '¡Bienvenido a Hakimet! 👋🏻 Tu mejor página de anime...'
    }).then(() => {
      window.location.href = "http://localhost:3000/home"; 
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuario o contraseña incorrectos ❌'
    });
  }
};

export const togglePasswordVisibility = () => {
  let passwordField = document.getElementById("RPass");
  let showPassCheckbox = document.getElementById("showPass");

  if (showPassCheckbox.checked) {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
};
