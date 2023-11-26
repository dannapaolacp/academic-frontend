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
              <td v-text="student.foto"></td>
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
                <button class="btn btn-danger">
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
    getStudents() {
      this.loading = true;
      axios
        .get("http://academicobackend.test/api/v1/estudiantes")
        .then((res) => {
          this.students = res.data;
          this.loading = false;
        });
    },
  },
};
</script>
