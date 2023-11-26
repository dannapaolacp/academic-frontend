import Swal from "sweetalert2";
import axios from "axios";

//function to show many alerts
export function showAlert(title, icon, focus = "") {
  if (focus != "") {
    document.getElementById(focus).focus();
  }

  Swal.fire({
    title: title,
    icon: icon,
    customClass: { confirmButton: "btn btn-info", popup: "animated zoonIn" },
    buttonsStyling: false,
  });
}

//function to confirm the user response
export function confirm(mainUrl, id, title, icon, message) {
  let url = mainUrl + id;
  const swalWithBootstrapButton = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success me-3",
      cancelButton: "btn btn-danger",
    },
  });

  swalWithBootstrapButton
    .fire({
      title: title,
      text: message,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: '<i class="fa-solid fa-check"></i> Si, eliminar',
      cancelButtonText: '<i class="fa-solid fa-ban"></i> Cancelar',
    })
    .then((res) => {
      if (res.isConfirmed) {
        sendRequest("DELETE", { id: id }, url, "Eliminado con éxito");
      } else {
        showAlert("Operación cancelada", "ban");
      }
    });

  Swal.fire({
    title: title,
    icon: icon,
    customClass: { confirmButton: "btn btn-info", popup: "animated zoonIn" },
    buttonsStyling: false,
  });
}

//function to request data from the server... delete request
export function sendRequest(method, params, url, message) {
  axios({ method: method, url: url, data: params })
    .then(function (res) {
      let status = res.status;
      if (status == 200) {
        showAlert(message, "success");
        window.setTimeout(function () {
          window.location.href = "/";
        }, 1000);
      } else {
        showAlert("No se pudo recuperar la respuesta", "error");
      }
    })
    .catch(function (error) {
      showAlert("Servidor no disponible", "error");
    });
}
