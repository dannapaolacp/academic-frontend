<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Foto</th>
              <th>NOMBRE</th>
              <th>APELLIDO</th>
              <th>REGISTRO</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="content">
            <!-- content if loading -->
            <tr v-if="this.loading">
              <td colspan="6">
                <h4 class="d-flex justify-content-center">Cargando...</h4>
              </td>
            </tr>
            <!-- content if isn't loading -->
            <tr v-else v-for="(student, i) in this.students" :key="student.id">
              <td v-text="i + 1"></td>
              <td v-text="student.id"></td>
              <td>
                <img
                  v-if="student.foto"
                  style="width: 150px !important"
                  :src="student.foto"
                  class="img-thumbnail"
                  alt=""
                />
                <img
                  v-else
                  style="width: 150px !important"
                  src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-256.png"
                  class="img-thumbnail"
                  alt=""
                />
              </td>
              <td v-text="student.nombre"></td>
              <td v-text="student.apellido"></td>
              <!-- friendly date reading -->
              <td
                v-text="
                  new Date(student.created_at).toLocaleDateString('en-US')
                "
              ></td>
              <!-- buttons for actions -->
              <td>
                <router-link
                  :to="{ path: 'view/' + student.id }"
                  class="btn btn-info"
                >
                  <i class="fa-solid fa-eye"></i>
                </router-link>
                &nbsp;
                <router-link
                  :to="{ path: 'edit/' + student.id }"
                  class="btn btn-warning"
                >
                  <i class="fa-solid fa-edit"></i>
                </router-link>
                &nbsp;
                <!-- call delete method to delete a student -->
                <button
                  class="btn btn-danger"
                  v-on:click="deleteStudent(student.id, student.nombre)"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { confirm } from "../functions";

export default {
  //students data
  data() {
    return {
      students: null,
      loading: false,
    };
  },
  //if already charged, call the getStudents method
  mounted() {
    this.getStudents();
  },
  //http methods
  methods: {
    //show students
    getStudents() {
      this.loading = true;
      axios
        .get("http://academicobackend.test/api/v1/estudiantes")
        .then((res) => {
          this.students = res.data;
          this.loading = false;
        });
    },
    //delete students
    deleteStudent(id, name) {
      console.log(`Click en el botón de eliminación para ${name} con ID ${id}`);
      confirm(
        "http://academicobackend.test/api/v1/estudiantes/",
        id,
        "Eliminar estudiante",
        "info",
        "Realmente desea eliminar a " + name + "?"
      );
      this.loading = false;
    },
  },
};
</script>
