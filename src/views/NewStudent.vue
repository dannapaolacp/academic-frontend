<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          Registrar estudiante
        </div>
        <div class="card-body">
          <form v-on:submit="saveStudents">
            <div class="d-grid col-6 mx-auto mb-3">
              <img
                v-if="this.foto"
                height="100"
                :src="this.foto"
                id="fotoImg"
                class="img-thumbnail"
                alt=""
              />
              <img
                v-else
                height="100"
                src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-256.png"
                id="fotoImg"
                class="img-thumbnail"
                alt=""
              />
            </div>
            <!-- name entry -->
            <div class="input-group mb-3">
              <span class="input-group-text">
                <i class="fa-solid fa-user"></i>
              </span>
              <input
                type="text"
                v-model="nombre"
                id="nombre"
                placeholder="Ingrese su nombre"
                required
                maxlength="50"
                class="form-control"
              />
            </div>
            <!-- last name entry -->
            <div class="input-group mb-3">
              <span class="input-group-text">
                <i class="fa-solid fa-user"></i>
              </span>
              <input
                type="text"
                v-model="apellido"
                id="apellido"
                placeholder="Ingrese su apellido"
                required
                maxlength="50"
                class="form-control"
              />
            </div>
            <!-- photo upload -->
            <!-- the 'accept' attribute ensures that only images are received -->
            <div class="input-group mb-3">
              <span class="input-group-text">
                <i class="fa-solid fa-camera"></i>
              </span>
              <input
                type="file"
                v-on:change="previewPhoto"
                accept="image/png, image/jpeg, image/gif"
                maxlength="50"
                class="form-control"
              />
            </div>
            <!-- boton -->
            <div class="d-grid col-6 mx-auto mb-3">
              <button class="btn btn-success">
                <i class="fa-solid fa-floppy-disk"></i>
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { showAlert, sendRequest } from "../functions";

export default {
  //students data
  data() {
    return {
      nombre: "",
      apellido: "",
      foto: "",
      url: "http://academicobackend.test/api/v1/estudiantes",
      loading: false,
    };
  },
  //http methods
  methods: {
    //save students
    saveStudents() {
      event.preventDefault();
      let myPhoto = document.getElementById("fotoImg");
      this.foto = myPhoto.src;
      if (this.nombre.trim() === "") {
        showAlert("Ingrese un nombre", "warning", "nombre");
      } else if (this.apellido.trim() === "") {
        showAlert("Ingrese un apellido", "warning", "apellido");
      } else {
        let params = {
          nombre: this.nombre.trim(),
          apellido: this.apellido.trim(),
          foto: this.foto.trim(),
        };
        sendRequest("POST", params, this.url, "Estudiante registrado!");
      }
    },
    //upload photo
    previewPhoto(event) {
      let reader = new FileReader();
      //of the uploaded files select the first one
      reader.readAsDataURL(event.target.files[0]);
      //when the file is uploaded
      reader.onload = function () {
        let myPhoto = document.getElementById("fotoImg");
        myPhoto.src = reader.result;
        //puts the uploaded photo on the page display
        this.foto = myPhoto.src;
      };
    },
  },
  //delete students
};
</script>
