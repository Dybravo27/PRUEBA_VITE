import Swal from 'sweetalert2'
let cont = 0;
function sumar() {
  if (cont < 10) ++cont;
  else {
    Swal.fire({
      title: 'ERROR!',
      text: 'NO SE PUEDE SUMAR MAS DE 10',
      icon: 'error',
      confirmButtonText: 'CERRAR',
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
    })
  }
  return cont;
}
function restar() {
  if (cont > 0) --cont;
  else {
    Swal.fire({
      title: 'ERROR!',
      text: 'NO SE PUEDE RESTAR MENOS DE 0',
      icon: 'error',
      confirmButtonText: 'CERRAR',
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
    })
  }
  return cont;
}
function restablecer() {
  cont = 0;
  Swal.fire({
    title: 'EXITOSO!',
    text: 'RESTABLECIDO CON EXITO',
    icon: 'success',
    confirmButtonText: 'CERRAR',
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
  })
  return cont;
}
export { sumar, restar, restablecer };