const validateForm = (function () {
  const validarSelect = (select) => {
    if (select.value === '') {
      return false;
    }
    return true;
  };

  const validarOpcionSeleccionada = (opciones) => {
    for (let i = 0; i < opciones.length; i++) {
      if (opciones[i].checked) {
        return true;
      }
    }
    return false;
  };

  const validarFormulario = () => {
    const selects = document.getElementsByTagName('select');
    const options = document.getElementsByClassName('field');

    if (
      !validateForm.validarOpciones(options) ||
      !validateForm.validarSelects(selects)
    ) {
      return false;
    }

    resetForm();
    return true;
  };

  const resetForm = () => {
    const formUser = document.querySelector('#form-user');
    if (formUser) {
      formUser.reset();
    }
  };

  const showAlert = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: 'Aceptar',
    });
  };

  const initialize = () => {
    const formUser = document.querySelector('#form-user');
    if (formUser) {
      formUser.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validarFormulario()) {
          showAlert('Éxito', 'Formulario enviado correctamente', 'success');
        } else {
          showAlert(
            'Error',
            'Por favor, complete todas las selecciones.',
            'error'
          );
        }
      });
    }
  };

  return {
    initialize,
    validarOpciones: function (options) {
      for (let i = 0; i < options.length; i++) {
        let opctionsRadio = options[i].getElementsByTagName('input');

        if (!validarOpcionSeleccionada(opctionsRadio)) {
          return false;
        }
      }
      return true;
    },
    validarSelects: function (selects) {
      for (let i = 0; i < selects.length; i++) {
        if (!validarSelect(selects[i])) {
          return false;
        }
      }
      return true;
    },
  };
})();

validateForm.initialize();
