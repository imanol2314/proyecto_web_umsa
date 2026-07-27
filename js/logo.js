// Cambiar a Iniciar Sesión
function mostrarLogin() {
  document.getElementById("formLogin").style.display = "block";
  document.getElementById("formRegistro").style.display = "none";
  
  // Cambia la pestaña activa
  document.getElementById("btnTabLogin").classList.add("activa");
  document.getElementById("btnTabRegistro").classList.remove("activa");
}

// Cambiar a Registrarse
function mostrarRegistro() {
  document.getElementById("formLogin").style.display = "none";
  document.getElementById("formRegistro").style.display = "block";
  
  // Cambia la pestaña activa
  document.getElementById("btnTabRegistro").classList.add("activa");
  document.getElementById("btnTabLogin").classList.remove("activa");
}

// Validar Ingreso
function validarLogin() {
  let user = document.getElementById("loginUsuario").value;
  let pass = document.getElementById("loginPassword").value;

  if (user === "" || pass === "") {
    alert("Por favor, llena todos los campos.");
  } else {
    alert("¡Bienvenido " + user + "!");
    window.location.href = "index.html"; // Redirige al inicio
  }
}

// Validar Registro
function validarRegistro() {
  let nom = document.getElementById("regNombre").value;
  let user = document.getElementById("regUsuario").value;
  let mail = document.getElementById("regCorreo").value;
  let pass = document.getElementById("regPassword").value;

  if (nom === "" || user === "" || mail === "" || pass === "") {
    alert("Por favor, completa todos los campos.");
  } else {
    alert("¡Cuenta creada con éxito!");
    mostrarLogin(); // Pasa a iniciar sesión
  }
}