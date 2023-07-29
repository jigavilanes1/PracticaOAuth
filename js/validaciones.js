// JavaScript Document
	var y = document.getElementById("crearNombre");
	var x = document.getElementById("crearApellido");
	var r = document.getElementById("crearCedula");
	var z = document.getElementById("crearFecha");
	var correo = document.getElementById("crearCorreo");
	var p = document.getElementById("crearUsuario");
	var contra = document.getElementById("crearContra");
	x.disabled = true;
	r.disabled = true;
	z.disabled = true;
	correo.disabled = true;
	contra.disabled = true;

function validarNombre() {
		if (isNaN(y.value) == false) {
			y.value = '';
			alert("Debe ingresar su nombre");
			x.disabled = true;
		} else {
			x.disabled = false;
			y.disabled = true;
		}
		alert("Debe iombre");	
}

function validarApellido() {
	if (isNaN(x.value) == false) {
		x.value = '';
		alert("Debe ingresar su apellido");
		r.disabled = true;
	} else {
		x.disabled = true;
		r.disabled = false;
	}
}

function validarCedula() {
	var cedula = document.getElementById("crearCedula").value;
	if (cedula.length == 10) {
		var digito_region = cedula.substring(0, 2);
		if (digito_region >= 1 && digito_region <= 24) {
			var ultimo_digito = cedula.substring(9, 10);
			var pares = parseInt(cedula.substring(1, 2)) + parseInt(cedula.substring(3, 4)) + parseInt(cedula.substring(5, 6)) + parseInt(cedula.substring(7, 8));
			var numero1 = cedula.substring(0, 1);
			numero1 = (numero1 * 2);

			if (numero1 > 9) {
				numero1 = (numero1 - 9);
			}
			var numero3 = cedula.substring(2, 3);
			numero3 = (numero3 * 2);

			if (numero3 > 9) {
				numero3 = (numero3 - 9);
			}
			var numero5 = cedula.substring(4, 5);
			numero5 = (numero5 * 2);

			if (numero5 > 9) {
				numero5 = (numero5 - 9);
			}
			var numero7 = cedula.substring(6, 7);
			numero7 = (numero7 * 2);

			if (numero7 > 9) {
				numero7 = (numero7 - 9);
			}
			var numero9 = cedula.substring(8, 9);
			numero9 = (numero9 * 2);

			if (numero9 > 9) {
				numero9 = (numero9 - 9);
			}
			var impares = numero1 + numero3 + numero5 + numero7 + numero9;
			var suma_total = (pares + impares);
			var primer_digito_suma = String(suma_total).substring(0, 1);
			var decena = (parseInt(primer_digito_suma) + 1) * 10;
			var digito_validador = decena - suma_total;
			
			if (digito_validador == 10)
				digito_validador = 0;
				
			if (digito_validador == ultimo_digito) {
				z.disabled = false;
			} else {
				alert('la cedula:' + cedula + ' es incorrecta (No existe)');
				z.disabled = true;
				
			}

		} else {
			alert('Esta cedula no pertenece a ninguna region');
			z.disabled = true;
		}
	} else {
		alert('Esta cedula tiene menos de 10 Digitos');
		z.disabled = true;
	}

}

function validarFecha() {
	var mayor = calcularEdad(z.value);
	if (mayor < 18) {
		z.value = "";
		alert("Debe ser mayor de 18 años");
		correo.disabled = true;
	}else{
		correo.disabled = false;
	}
}

function validarCorreo() {
	var re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if (!re.exec(correo.value)) {
		alert('Email no valido');
		z.disabled = true;
	}
}

function validarUsuario() {
	var noValido = / /;
	if (noValido.test(p.value)) { // se chequea el regex de que el string no tenga espacio      
		alert("El usuario no puede contener espacios en blanco");
		contra.disabled = true;
		return false;
	} else {
		contra.disabled = false;
		return false;
	}
}
function validarContra() {
	var noValido = / /;
	if (noValido.test(contra.value)) { // se chequea el regex de que el string no tenga espacio
		alert("La contraseña no puede contener espacios en blanco");
		p.disabled = false;
		return false;
	} else {
		p.disabled = true;
		return false;
	}
}

